import { productDetails } from "./data.js";

const cartRenderTable = document.querySelector(".cart-table-body");
const urlParms = new URLSearchParams(window.location.search);
const productId = urlParms.get("id");
console.log("Got : " + productId);

// const cartItems = [];

function productIdSearch(items, id) {
  const index = items.findIndex((item, index) => {
    return item.id === id;
  });

  return productDetails[index];
}
const cartProduct = productIdSearch(productDetails, productId);
// cartItems.push(cartProduct);
// let cartItemsStorage;
let cartItemsStorage = JSON.parse(localStorage.getItem("cartProducts"));
function renderCartProduct(cartItemsStorage) {
  return (cartRenderTable.innerHTML = cartItemsStorage
    .map((item) => {
      return `
          <tr id="${item.id}">
          <td><i class="far fa-times-circle cart-item-remove" data-cart-remove-btn></i></td>
          <td><img src="${item.img}" alt=""></td>
          <td>${item.name}</td>
          <td>$${item.price}</td>
          <td><input type="number" value="1"></td>
          <td>$${item.price}</td>
      </tr>
          `;
    })
    .join(""));
}
renderCartProduct(cartItemsStorage);

//!========================================REMOVE ITEM FROM CART FUNCTIONALY===================================

const removeBtns = document.querySelectorAll(".cart-item-remove");

for (let i = 0; i < removeBtns.length; i++) {
  removeBtns[i].addEventListener("click", (event) => {
    const currentItem = event.currentTarget;
    const itemRow = currentItem.parentElement.parentElement;
    deleteItemFromCart(itemRow);
  });
}

function deleteItemFromCart(itemRow) {
  const index = cartItemsStorage.findIndex((items, index) => {
    return items.id === itemRow.id;
  });
  console.log("Item Selected on Index : " + index);
  cartItemsStorage.splice(index, 1);
  localStorage.setItem("cartProducts", JSON.stringify(cartItemsStorage));
  // cartItemsStorage = JSON.parse(localStorage.getItem("cartProducts"));
  window.location.reload();
}
