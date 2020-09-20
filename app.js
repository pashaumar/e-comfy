const createProduct = (product) => {
  const productContainer = document.createElement("div");
  productContainer.classList.add("items");
  const imageWrapper = document.createElement("div");
  imageWrapper.classList.add("imageWrapper");
  const image = document.createElement("img");
  const imageOverlay = document.createElement("div");
  imageOverlay.classList.add("imageOverlay");
  const searchContainer = document.createElement("a");
  searchContainer.classList.add("search-container");
  const cartContainer = document.createElement("div");
  cartContainer.classList.add("cart-container");
  const searchFont = document.createElement("i");
  const cartFont = document.createElement("i");
  searchFont.classList.add("fas");
  cartFont.classList.add("fas");
  searchFont.classList.add("fa-search");
  cartFont.classList.add("fa-cart-plus");
  searchContainer.appendChild(searchFont);
  cartContainer.appendChild(cartFont);
  imageOverlay.appendChild(searchContainer);
  imageOverlay.appendChild(cartContainer);
  searchContainer.href = `/product.html?id=${product.id}`;
  image.src = product.img;
  imageWrapper.appendChild(image);
  imageWrapper.appendChild(imageOverlay);
  const heading = document.createElement("h4");
  heading.textContent = product.name;
  const para = document.createElement("p");
  para.textContent = `$${product.price}`;
  productContainer.appendChild(imageWrapper);
  productContainer.appendChild(heading);
  productContainer.appendChild(para);
  return productContainer;
};

for (const product of allProducts) {
  if (product.id === 1 || product.id === 9 || product.id === 10) {
    const homeItemsContainer = document.querySelector(".home-items");
    const newProduct = createProduct(product);
    homeItemsContainer.appendChild(newProduct);
  }
}

// targeting cart sidebar
const cartContent = document.querySelector(".fa-cart-plus");
const cartSidebar = document.querySelector(".cart-sidebar");
cartContent.addEventListener("click", () => {
  cartSidebar.style.transform = "translateX(0%)";
  const cartCross = document.querySelector(".cart-cross");
  cartCross.addEventListener("click", () => {
    cartSidebar.style.transform = "translateX(100%)";
  });
});

const checkout = document.createElement("div");
checkout.classList.add("checkout");
checkout.textContent = "checkout";
cartSidebar.appendChild(checkout);

const itemsInCart = document.querySelector(".items-in-cart");
const cartContainer = document.querySelectorAll(".cart-container");
let cartValue = 0;

for (item of cartContainer) {
  const productId = parseInt(item.dataset.productId);
  const product = getProductById(productId);
  item.addEventListener("click", () => {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    if (!!cartItems === false) {
      const cartItems = [];
      cartItems.push({ ...product, quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(cartItems));
      itemsInCart.innerHTML = 1;
      return;
    }
    if (isItemAlreadyInCart(productId, cartItems)) {
      const newCartItems = increaseItemCount(productId, cartItems);
      localStorage.setItem("cart", JSON.stringify(newCartItems));
      itemsInCart.innerHTML = getCartQuantity(newCartItems);
    } else {
      cartItems.push({ ...product, quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(cartItems));
      itemsInCart.innerHTML = getCartQuantity(cartItems);
    }
  });
}

// targeting hamburger
const burger = document.querySelector(".burger");
const burgerCross = document.querySelector(".burger-cross");
burger.addEventListener("click", () => {
  document.querySelector(".links").style.transform = "translateX(0%)";
  burgerCross.style.display = "block";
  burger.style.display = "none";
});
burgerCross.addEventListener("click", () => {
  document.querySelector(".links").style.transform = "translateX(-100%)";
  burger.style.display = "block";
  burgerCross.style.display = "none";
});
let cartItems = JSON.parse(localStorage.getItem("cart"));
if (!cartItems) {
  itemsInCart.innerHTML = 0;
} else {
  itemsInCart.innerHTML = getCartQuantity(cartItems);
}
