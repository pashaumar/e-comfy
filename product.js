const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

const product = allProducts.filter((item) => {
  return item.id == productId;
})[0];

// const productName = document.createElement("div");
// productName.textContent = product.name;
// document.querySelector("body").appendChild(productName);

const pageTitle = document.querySelector(".page-title");
pageTitle.innerText = `Home / ${product.name}`;

const productName = document.querySelector(".name-of-the-product");
productName.innerText = product.name;

const image = document.getElementById("img");
image.src = product.img;

const productPrice = document.querySelector(".product-price");
productPrice.innerText = `$${product.price}`;
