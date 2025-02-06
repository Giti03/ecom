// Initialize bagProducts from localStorage
let bagProducts = JSON.parse(localStorage.getItem('bagProducts')) || [];

// Function to save bagProducts to localStorage
function saveBagToLocalStorage() {
    localStorage.setItem('bagProducts', JSON.stringify(bagProducts));
}

// Function to update cart count in UI
function updateBagIcon() {
    const bagCountElements = document.querySelectorAll('.bag-count');
    bagCountElements.forEach(element => {
        if (bagProducts.length > 0) {
            element.style.visibility = 'visible';
            element.textContent = bagProducts.length;
        } else {
            element.style.visibility = 'hidden';
            element.textContent = '0';
        }
    });
}

// Function to add product to bag
function addToBag(productId) {
    if (!bagProducts.includes(productId)) {
        bagProducts.push(productId);
        saveBagToLocalStorage();
        updateBagIcon();
    }
}

// Function to remove product from bag
function removeFromBag(productId) {
    bagProducts = bagProducts.filter(id => id !== productId);
    saveBagToLocalStorage();
    updateBagIcon();
}

// Initialize cart functionality when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    updateBagIcon();
    
    // Add this if you need to display cart items on cart page
    if (document.getElementById('cart-container')) {
        displayCartItems();
    }
});

// Optional: Function to display cart items (for cart page)
function displayCartItems() {
    const cartContainer = document.getElementById('cart-container');
    const totalPriceElement = document.getElementById('total-price');
    
    if (!cartContainer || !totalPriceElement) return;

    cartContainer.innerHTML = bagProducts.length === 0 
        ? '<p>Your cart is empty.</p>'
        : bagProducts.map(productId => {
            const product = getProductById(productId); // Implement this function
            return `
                <div class="cart-item">
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>Price: ₹${product.price}</p>
                    <button onclick="removeFromBag(${productId})">Remove</button>
                </div>
            `;
        }).join('');

    totalPriceElement.textContent = `Total: ₹${calculateTotal()}`; // Implement calculateTotal()
}