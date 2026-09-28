CREATE DATABASE IF NOT EXISTS lanka_store
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE lanka_store;


CREATE TABLE IF NOT EXISTS orders (

    id INT AUTO_INCREMENT PRIMARY KEY,

    tracking_code VARCHAR(50)
        NOT NULL UNIQUE,

    customer_name VARCHAR(120)
        NOT NULL,

    email VARCHAR(160),

    phone VARCHAR(40)
        NOT NULL,

    address TEXT
        NOT NULL,

    total DECIMAL(12,2)
        NOT NULL DEFAULT 0,

    status ENUM(
        'Processing',
        'Packed',
        'Shipped',
        'Delivered',
        'Cancelled'
    )
    NOT NULL DEFAULT 'Processing',

    created_at TIMESTAMP
        DEFAULT CURRENT_TIMESTAMP

);


CREATE TABLE IF NOT EXISTS order_items (

    id INT AUTO_INCREMENT PRIMARY KEY,

    order_id INT NOT NULL,

    product_name VARCHAR(160)
        NOT NULL,

    quantity INT
        NOT NULL DEFAULT 1,

    price DECIMAL(12,2)
        NOT NULL DEFAULT 0,

    FOREIGN KEY (order_id)
        REFERENCES orders(id)
        ON DELETE CASCADE

);