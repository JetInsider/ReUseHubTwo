const CartItems = document.querySelector(".cart-items");

function displayCartItems() {
  const items = JSON.parse(localStorage.getItem("cart"));
  CartItems.innerHTML = ''; // Clear current items
  items.forEach((item, index) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart_item";
    cartItem.innerHTML = `
      <p class="cart_id">${item.id}</p>
      <p class="cart_title">${item.title}</p>
      <img src="${item.image}" alt="${item.title}" class="cart_img" />
      <p class="cart_price">${item.price}</p>
      <button class="cart_delete" data-index="${index}">Delete</button>
    `;
    CartItems.appendChild(cartItem);
  });

  // Add event listeners to delete buttons
  const deleteButtons = document.querySelectorAll(".cart_delete");
  deleteButtons.forEach(button => {
    button.addEventListener("click", deleteCartItem);
  });
}

function deleteCartItem(event) {
  const itemIndex = event.target.getAttribute("data-index");
  let items = JSON.parse(localStorage.getItem("cart"));
  items.splice(itemIndex, 1);
  localStorage.setItem("cart", JSON.stringify(items));
  displayCartItems();
}

displayCartItems();
