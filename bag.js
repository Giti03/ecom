// bag.js

document.addEventListener("DOMContentLoaded", () => {
  const bagItemsContainer = document.getElementById("bag-items");
  const totalPriceElement = document.getElementById("totalPrice");

  // Get bagProducts from localStorage or default to an empty array
  let bagProducts = JSON.parse(localStorage.getItem("bagProducts")) || [];

  // Function to update the bag icon count
  function updateBagIcon() {
    const bagIconElement = document.querySelector(".bag-count");
    if (bagIconElement) {
      bagIconElement.textContent = bagProducts.length;
      bagIconElement.style.visibility = bagProducts.length > 0 ? "visible" : "hidden";
    }
  }

  // Function to render the bag products
  function renderBag() {
    bagItemsContainer.innerHTML = "";
    let total = 0;

    if (bagProducts.length === 0) {
      bagItemsContainer.innerHTML = "<p>Your bag is empty!</p>";
    } else {
      bagProducts.forEach((product, index) => {
        // Check for valid product object
        if (!product || !product.productName || !product.productImageUrl || typeof product.price !== "number") {
          console.warn("Invalid product at index", index, product);
          return;
        }

        const itemDiv = document.createElement("div");
        itemDiv.className = "bag-item";

        itemDiv.innerHTML = `
          <img src="${product.productImageUrl}" alt="${product.productName}" class="bag-img">
          <div class="bag-details">
            <h3>${product.productName}</h3>
            <p>Price: ₹${product.price}</p>
          </div>
          <button class="remove-btn" data-index="${index}">Remove</button>
        `;

        bagItemsContainer.appendChild(itemDiv);
        total += product.price;
      });
    }

    totalPriceElement.textContent = `Total: ₹${total}`;
    updateBagIcon();
  }

  // Remove items using event delegation
  bagItemsContainer.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("remove-btn")) {
      const index = e.target.getAttribute("data-index");
      bagProducts.splice(index, 1);
      localStorage.setItem("bagProducts", JSON.stringify(bagProducts));
      renderBag();
    }
  });

  // Initial render
  renderBag();
});
