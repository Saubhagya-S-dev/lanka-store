<?php

header("Content-Type: application/json");

require_once "config.php";


$data =
    json_decode(
        file_get_contents("php://input"),
        true
    );


if (!$data) {

    echo json_encode([
        "success" => false,
        "message" => "Invalid order data."
    ]);

    exit;
}


$name =
    trim($data["name"] ?? "");

$email =
    trim($data["email"] ?? "");

$phone =
    trim($data["phone"] ?? "");

$address =
    trim($data["address"] ?? "");

$items =
    $data["items"] ?? [];

$total =
    (float)($data["total"] ?? 0);


if (
    $name === "" ||
    $phone === "" ||
    $address === "" ||
    empty($items)
) {

    echo json_encode([
        "success" => false,
        "message" =>
            "Please fill all required fields."
    ]);

    exit;
}


try {

    $pdo->beginTransaction();


    $tracking =
        "LS" .
        date("YmdHis") .
        random_int(100, 999);


    $stmt =
        $pdo->prepare(
            "INSERT INTO orders
            (
                tracking_code,
                customer_name,
                email,
                phone,
                address,
                total,
                status
            )
            VALUES
            (
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                'Processing'
            )"
        );


    $stmt->execute([
        $tracking,
        $name,
        $email,
        $phone,
        $address,
        $total
    ]);


    $orderId =
        $pdo->lastInsertId();


    $itemStmt =
        $pdo->prepare(
            "INSERT INTO order_items
            (
                order_id,
                product_name,
                quantity,
                price
            )
            VALUES
            (
                ?,
                ?,
                ?,
                ?
            )"
        );


    foreach ($items as $item) {

        $itemStmt->execute([

            $orderId,

            $item["name"] ??
                "Product",

            (int)(
                $item["qty"] ?? 1
            ),

            (float)(
                $item["price"] ?? 0
            )

        ]);

    }


    $pdo->commit();


    echo json_encode([

        "success" => true,

        "message" =>
            "Order placed successfully.",

        "tracking_code" =>
            $tracking

    ]);


} catch (Throwable $e) {

    if (
        $pdo->inTransaction()
    ) {

        $pdo->rollBack();

    }


    http_response_code(500);


    echo json_encode([

        "success" => false,

        "message" =>
            "Could not save the order."

    ]);

}

?>