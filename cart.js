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
// let cartItemsStorage;/
let cartItemsStorage = JSON.parse(localStorage.getItem("cartProducts"));
function renderCartProduct() {
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
renderCartProduct();

// // function cartRemoveProductButton() {
// const removeBtns = document.querySelectorAll(".cart-item-remove");
// //   console.log("array" + removeBtns);
// removeBtns.forEach((btn) => {
//   btn.addEventListener("click", (event) => {
//     const currentbtn = event.currentTarget;
//     const currentRow = currentbtn.parentElement.parentElement;
//     deleteCartDetails(currentRow);
// });
// });

// function deleteCartDetails(currentRow) {
//   const currentRowId = currentRow.id;
//   console.log(currentRow);
//   currentRow.addEventListener("click", () => {
//     const index = cartItemsStorage.findIndex((item, index) => {
//       return item.id === currentRowId;
//     });

//     //   console.log(index);

//     if (localStorage.getItem("cartProducts") == null) {
//       cartItemsStorage = [];
//     } else {
//       cartItemsStorage = JSON.parse(localStorage.getItem("cartProducts"));
//     }
//     cartItemsStorage.splice(index, 1);
//     localStorage.setItem("cartProducts", JSON.stringify(cartItemsStorage));
//     cartItemsStorage = JSON.parse(localStorage.getItem("cartProducts"));
//     renderCartProduct();
//   });
// }

// cartRemoveProductButton();

// console.log(cartItems);
