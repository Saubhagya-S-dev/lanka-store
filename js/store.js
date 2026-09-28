const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        category: "Electronics",
        price: 8500,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        name: "Smart Watch",
        category: "Electronics",
        price: 12500,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        name: "Travel Backpack",
        category: "Fashion",
        price: 5500,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        name: "Running Shoes",
        category: "Fashion",
        price: 9200,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        name: "Classic Sunglasses",
        category: "Fashion",
        price: 3500,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        name: "Coffee Maker",
        category: "Home",
        price: 14500,
        image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 7,
        name: "Desk Lamp",
        category: "Home",
        price: 4200,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 8,
        name: "Bluetooth Speaker",
        category: "Electronics",
        price: 6800,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80"
    },
    {
    name: "Wireless Headphones",
    category: "Electronics",
    price: 8500,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
},

{
    name: "Smart Watch",
    category: "Electronics",
    price: 12500,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
},

{
    name: "Laptop Backpack",
    category: "Fashion",
    price: 4500,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"
},

{
    name: "Running Shoes",
    category: "Fashion",
    price: 9800,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
},

{
    name: "Cotton T-Shirt",
    category: "Fashion",
    price: 2800,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80"
},

{
    name: "Leather Wallet",
    category: "Fashion",
    price: 3200,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80"
},

{
    name: "Coffee Mug Set",
    category: "Home",
    price: 2400,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=800&q=80"
},

{
    name: "Table Clock",
    category: "Home",
    price: 3500,
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=800&q=80"
},


{
    name: "Bluetooth Keyboard",
    category: "Electronics",
    price: 7200,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80"
},

{
    name: "Wireless Mouse",
    category: "Electronics",
    price: 3800,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80"
},

{
    name: "Phone Stand",
    category: "Electronics",
    price: 1800,
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=800&q=80"
},

{
    name: "Travel Backpack",
    category: "Fashion",
    price: 6500,
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80"
},


{
    name: "LED Desk Light",
    category: "Home",
    price: 4800,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
},

{
    name: "Smartphone",
    category: "Electronics",
    price: 45900,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"
},

{
    name: "Wireless Earbuds",
    category: "Electronics",
    price: 6500,
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=800&q=80"
},

{
    name: "Gaming Headset",
    category: "Electronics",
    price: 9800,
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=800&q=80"
},

{
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 11500,
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80"
},

{
    name: "Men's Casual Shirt",
    category: "Fashion",
    price: 4200,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
},

{
    name: "Women's Handbag",
    category: "Fashion",
    price: 7800,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80"
},

{
    name: "Denim Jacket",
    category: "Fashion",
    price: 8900,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
},

{
    name: "Sports Cap",
    category: "Fashion",
    price: 2200,
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=800&q=80"
},

{
    name: "Modern Wall Clock",
    category: "Home",
    price: 5200,
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=800&q=80"
},

{
    name: "Indoor Plant",
    category: "Home",
    price: 1800,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80"
},

{
    name: "Table Fan",
    category: "Home",
    price: 7500,
    image: "https://images.unsplash.com/photo-1520981825232-ece5fae45120?auto=format&fit=crop&w=800&q=80"
},

{
    name: "Kitchen Storage Set",
    category: "Home",
    price: 3600,
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
}
];

let cart = JSON.parse(localStorage.getItem("lankaCart") || "[]");

function money(value) {
    return "Rs. " + Number(value).toLocaleString("en-LK");
}

function saveCart() {
    localStorage.setItem("lankaCart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.qty, 0);

    document.querySelectorAll(".cart-count").forEach(element => {
        element.textContent = count;
    });
}

function addToCart(id) {

    const product = products.find(product => product.id === id);

    if (!product) return;

    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.qty++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            qty: 1
        });
    }

    saveCart();

    alert(product.name + " added to cart.");
}

function renderProducts(list = products) {

    const grid = document.getElementById("productGrid");

    if (!grid) return;

    if (list.length === 0) {

        grid.innerHTML = `
            <div class="empty" style="grid-column:1/-1;">
                <h3>No products found</h3>
                <p>Try another search.</p>
            </div>
        `;

        return;
    }

    grid.innerHTML = list.map(product => {

        return `
            <article class="product-card">

                <img
                    class="product-image"
                    src="${product.image}"
                    alt="${product.name}"
                >

                <div class="product-body">

                    <small>${product.category}</small>

                    <h3>${product.name}</h3>

                    <div class="product-meta">
                        <span class="price">
                            ${money(product.price)}
                        </span>
                    </div>

                    <div class="cart-row">

                        <button
                            class="btn btn-primary"
                            onclick="addToCart(${product.id})"
                        >
                            🛒 Add to Cart
                        </button>

                    </div>

                </div>

            </article>
        `;

    }).join("");
}

function filterProducts() {

    const search =
        document.getElementById("searchInput")?.value
        .toLowerCase()
        .trim() || "";

    const category =
        document.getElementById("categoryFilter")?.value || "All";

    const filtered = products.filter(product => {

        const searchMatch =
            product.name.toLowerCase().includes(search) ||
            product.category.toLowerCase().includes(search);

        const categoryMatch =
            category === "All" ||
            product.category === category;

        return searchMatch && categoryMatch;
    });

    renderProducts(filtered);
}

document.addEventListener("DOMContentLoaded", () => {

    renderProducts();

    updateCartCount();

    document
        .getElementById("searchInput")
        ?.addEventListener("input", filterProducts);

    document
        .getElementById("categoryFilter")
        ?.addEventListener("change", filterProducts);

    const mobileButton =
        document.getElementById("mobileMenuBtn");

    const mobileMenu =
        document.getElementById("mobileMenu");

    mobileButton?.addEventListener("click", () => {

        if (!mobileMenu) return;

        if (mobileMenu.style.display === "block") {
            mobileMenu.style.display = "none";
        } else {
            mobileMenu.style.display = "block";
        }

    });

});