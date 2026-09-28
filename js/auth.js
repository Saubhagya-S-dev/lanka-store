const DEMO_ADMIN = {
    email: "admin@lankastore.com",
    password: "admin123"
};

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("loginForm");

    if (!form) return;

    form.addEventListener("submit", event => {

        event.preventDefault();

        const email =
            document.getElementById("email")
            .value
            .trim();

        const password =
            document.getElementById("password")
            .value;

        if (
            email === DEMO_ADMIN.email &&
            password === DEMO_ADMIN.password
        ) {

            localStorage.setItem(
                "lankaLoggedIn",
                "true"
            );

            localStorage.setItem(
                "lankaUser",
                JSON.stringify({
                    email: email,
                    role: "admin"
                })
            );

            window.location.href = "admin.html";

        } else {

            alert(
                "Invalid login details.\n\n" +
                "Email: admin@lankastore.com\n" +
                "Password: admin123"
            );

        }

    });

});


function logout() {

    localStorage.removeItem("lankaLoggedIn");

    localStorage.removeItem("lankaUser");

    window.location.href = "index.html";
}


function requireAdmin() {

    if (
        localStorage.getItem("lankaLoggedIn") !== "true"
    ) {

        window.location.href = "login.html";

    }

}