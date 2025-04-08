// productcommon.js

// Global variable that stores products added to the bag (cart)
let bagProducts = [];

/*-------------------------------------------------
  Functions for Cart (Bag) Management (Common Functionality)
--------------------------------------------------*/

// Initialize the bagProducts array from localStorage
function initBagProducts() {
    const storedData = localStorage.getItem('bagProducts');
    bagProducts = storedData ? JSON.parse(storedData) : [];
}

// Update the bag (cart) icon with the number of items
function updateBagIcon() {
    const bagIconElement = document.querySelector('.bag-count');
    if (bagIconElement) {
        if (bagProducts.length > 0) {
            bagIconElement.style.visibility = 'visible';
            bagIconElement.innerText = bagProducts.length;
        } else {
            bagIconElement.style.visibility = 'hidden';
        }
    }
}

// Add a product object to the bag and update localStorage & the bag icon count
function addToBag(product) {
    // Ensure we work with the latest bagProducts array
    initBagProducts();
    bagProducts.push(product);
    localStorage.setItem('bagProducts', JSON.stringify(bagProducts));
    updateBagIcon();
}

/*-------------------------------------------------
  Functions for Displaying Products (Products Page)
--------------------------------------------------*/

// Render the products on the products page, using your CSS classes to style each element
function renderProducts() {
    const container = document.getElementById('product-container');
    if (!container) return;  // Do nothing if container not found

    container.innerHTML = ""; // Clear any previous content

    // Assume organicProducts is defined in data.js
    organicProducts.forEach(product => {
        // Create a product card element using your CSS structure
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <img src="${product.productImageUrl}" alt="${product.productName}" class="product-image">
            <h3 class="product-name">${product.productName}</h3>
            <p class="product-description">${product.description}</p>
            <p class="product-price">Price: ₹${product.price}</p>
            <p class="product-rating">Rating: ${product.rating} / 5</p>
            <p class="product-stock">Stock: ${product.stock}</p>
            <button class="buy-button">Buy</button>
        `;

        // Attach an event listener to the "Buy" button to add the product to the bag
        const buyButton = productCard.querySelector('.buy-button');
        buyButton.addEventListener('click', () => {
            addToBag(product);
            // Optionally, alert the user
            alert(`${product.productName} added to bag!`);
        });
        
        container.appendChild(productCard);
    });
}

/*-------------------------------------------------
  Initialization
--------------------------------------------------*/

// When the DOM is fully loaded, initialize bagProducts, update bag icon and render products if container exists
document.addEventListener("DOMContentLoaded", () => {
    initBagProducts();
    updateBagIcon();
    
    // Only render products if we're on the product page (product container exists)
    if (document.getElementById('product-container')) {
        renderProducts();
    }
});
