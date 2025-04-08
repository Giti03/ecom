document.addEventListener("DOMContentLoaded", function() {
    let bagProducts = JSON.parse(localStorage.getItem("bagProducts")) || [];
    
    function displayProductCards(products) {
        console.log("🔍 Displaying products...");
        const container = document.getElementById("product-container");
        container.innerHTML = "";
    
        products.forEach(product => {
            const cardHTML = `
                <div class="product-card">
                    <img src="${product.productImageUrl}" alt="${product.productName}" class="product-image">
                    <h3>${product.productName}</h3>
                    <p>${product.description}</p>
                    <p>Price: ₹${product.price}</p>
                    <p>Rating: ⭐ ${product.rating}</p>
                    <p>${product.stock > 0 ? `In Stock: ${product.stock}` : "Out of Stock"}</p>
                    <button class="buy-button" onclick="addToBag(${product.productId})">Add to Bag</button>
                </div>
            `;
            container.innerHTML += cardHTML;
        });
    }
    
    function addToBag(productId) {
        if (!bagProducts.includes(productId)) {
            bagProducts.push(productId);
            localStorage.setItem("bagProducts", JSON.stringify(bagProducts));
            updateBagIcon();
        }
    }
    
    function updateBagIcon() {
        const bagCount = document.querySelector(".bag-count");
        bagCount.style.visibility = bagProducts.length > 0 ? "visible" : "hidden";
        bagCount.innerText = bagProducts.length;
    }
    
    displayProductCards(organicProducts);
    updateBagIcon();
});