document.addEventListener("DOMContentLoaded", () => {

    requireAdmin();

    const user =
        JSON.parse(
            localStorage.getItem("lankaUser") || "{}"
        );

    const emailElement =
        document.getElementById("adminEmail");

    if (emailElement) {
        emailElement.textContent =
            user.email || "Admin";
    }


    document
        .getElementById("logoutBtn")
        ?.addEventListener("click", logout);


    const orders =
        JSON.parse(
            localStorage.getItem("demoOrders") || "[]"
        );

    const table =
        document.getElementById("ordersTable");


    if (!table) return;


    if (orders.length === 0) {

        table.innerHTML = `
            <tr>
                <td colspan="4">
                    No orders found.
                </td>
            </tr>
        `;

        return;
    }


    table.innerHTML =
        orders.map(order => {

            return `
                <tr>

                    <td>
                        ${order.tracking}
                    </td>

                    <td>
                        ${order.name}
                    </td>

                    <td>
                        ${order.total}
                    </td>

                    <td>
                        <span class="status">
                            ${order.status}
                        </span>
                    </td>

                </tr>
            `;

        }).join("");

});