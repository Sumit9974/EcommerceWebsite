const productContainer = document.getElementById("pro-container");
const addProductButton = document.getElementById("add-product-button");
const addModal = document.getElementById("add-modal");
const modalContent = document.getElementsByClassName("modal__content");
const backdrop = document.getElementById("backdrop");

const renderProductButton = document.getElementById("modal-add-btn");
const cancelButton = document.getElementById("modal-cancel-btn");

addProductButton.addEventListener("click", showAddMovieBanner);
renderProductButton.addEventListener("click", addProductToPage);
cancelButton.addEventListener("click", removeAddMovieBanner);

const productDetails = [
  {
    id: 1,
    name: "Cartoon Astronaut T-Shirts",
    brand: "adidas",
    price: 78,
    img: "img/products/f1.jpg",
  },
  {
    id: 2,
    name: "Cartoon Astronaut d-Shirts",
    brand: "sssss",
    price: 178,
    img: "img/products/f2.jpg",
  },
  {
    id: 3,
    name: "Cartoon Astronaut d-Shirts",
    brand: "sssss",
    price: 178,
    img: "img/products/f3.jpg",
  },
  {
    id: 4,
    name: "Cartoon Astronaut d-Shirts",
    brand: "sssss",
    price: 178,
    img: "img/products/f4.jpg",
  },
  {
    id: 5,
    name: "Cartoon Astronaut d-Shirts",
    brand: "sssss",
    price: 178,
    img: "img/products/f5.jpg",
  },
];

function addProductToPage() {
  const title = document.getElementById("title").value;
  const brand = document.getElementById("brand").value;
  const imageSrc = document.getElementById("image-url").value;
  const price = document.getElementById("price").value;

  const product = {
    id: Math.random(),
    name: title,
    brand: brand,
    price: price,
    img: "img/products/" + imageSrc + ".jpg",
  };

  productDetails.push(product);
  removeAddMovieBanner();
  renderProduct();
  clearInputs();
}

const renderProduct = () => {
  return (productContainer.innerHTML = productDetails
    .map((x) => {
      let { id, name, brand, price, img } = x;
      return ` <div class="pro" >
                <img src="${img}" class="'pro-img" alt="">
                <div class="description">
                    <span class="pro-brand">${brand}</span>
                    <h5 class="pro-title">${name}</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4 class="pro-price">$ ${price}</h4>
                </div>
                <a href="#">
                    <i class="fal fa-shopping-cart cart"></i>
                </a>
            </div>`;
    })
    .join(""));
};

renderProduct();

// ===============================================================
function showAddMovieBanner() {
  addModal.classList.add("visible");
  backdrop.classList.add("visible");
}

function removeAddMovieBanner() {
  addModal.classList.remove("visible");
  backdrop.classList.remove("visible");
  clearInputs();
}

function clearInputs() {
  const inputs = document.querySelectorAll("input");
  for (let i = 0; i < inputs.length; i++) {
    inputs[0].value = "";
  }
}
