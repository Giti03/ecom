let bagProducts = [];

// Initialize the bagProducts array from localStorage
function initBagProducts() {
    let bagProductsStr = localStorage.getItem('bagProducts');
    bagProducts = bagProductsStr ? JSON.parse(bagProductsStr) : [];
}

// Function to update the cart count in the UI (for both product page and cart page)
function updateBagIcon() {
    const bagProductCountElement = document.querySelector('.bag-count');
    if (bagProductCountElement) {
        if (bagProducts.length > 0) {
            bagProductCountElement.style.visibility = 'visible';
            bagProductCountElement.innerText = bagProducts.length;
        } else {
            bagProductCountElement.style.visibility = 'hidden';
        }
    }
}

// Call initBagProducts to initialize the bagProducts array on page load
window.onload = function () {
    initBagProducts();
    updateBagIcon(); // Update the cart count on page load
};
