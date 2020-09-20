const productsWithImages = document.querySelector(".products-with-images");

const range = document.getElementById("range");
const rangeValue = document.querySelector(".range-value");
const pageTitle = document.querySelector(".page-title");
range.oninput = function () {
  rangeValue.innerText = "Value : $ " + range.value;
  const rangeProducts = allProducts.filter((item) => {
    return parseFloat(item.price) <= parseFloat(range.value);
  });
  productsWithImages.innerHTML = "";
  for (const product of rangeProducts) {
    const newProduct = createProduct(product);
    productsWithImages.appendChild(newProduct);
  }
  if (rangeProducts.length === 0) {
    const noProduct = document.createElement("p");
    noProduct.classList.add("no-product");
    productsWithImages.appendChild(noProduct);
    noProduct.textContent = "Sorry, No Products Matched Your Search";
  }
};
// dynamic product
const createAllProduct = (product) => {
  const productContainer = document.createElement("div");
  productContainer.classList.add("items");
  const imageWrapper = document.createElement("div");
  imageWrapper.classList.add("image-wrapper");
  const imageOverlay = document.createElement("div");
  imageOverlay.classList.add("image-overlay");
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
  cartContainer.dataset.productId = product.id;
  imageOverlay.appendChild(searchContainer);
  imageOverlay.appendChild(cartContainer);
  searchContainer.href = `/product.html?id=${product.id}`;
  const images = document.createElement("img");
  images.classList.add("images");
  const productName = document.createElement("h4");
  productName.classList.add("product-name");
  const productPrice = document.createElement("p");
  productPrice.classList.add("product-price");
  images.src = product.img;
  productName.textContent = product.name;
  productPrice.textContent = `$${product.price}`;
  productContainer.appendChild(imageWrapper);
  imageWrapper.appendChild(images);
  imageWrapper.appendChild(imageOverlay);
  productContainer.appendChild(productName);
  productContainer.appendChild(productPrice);
  return productContainer;
};

// all products
for (const product of allProducts) {
  const newProduct = createAllProduct(product);
  productsWithImages.appendChild(newProduct);
}

// targeting search input
const searchInput = document.getElementById("search");
searchInput.addEventListener("keypress", (e) => {
  const searchProducts = allProducts.filter((item) => {
    return item.name.toLowerCase().includes(searchInput.value.toLowerCase());
  });

  console.log(searchProducts);

  productsWithImages.innerHTML = "";
  for (const product of searchProducts) {
    const newProduct = createAllProduct(product);
    productsWithImages.appendChild(newProduct);
  }
  if (searchProducts.length === 0) {
    const noProduct = document.createElement("p");
    noProduct.classList.add("no-product");
    productsWithImages.appendChild(noProduct);
    noProduct.textContent = "Sorry, No Products Matched Your Search";
  }
  // if (searchInput.value == "") {
  //   for (const product of allProducts) {
  //     const newProduct = createProduct(product);
  //     productsWithImages.appendChild(newProduct);
  //   }
  // }
});

// targeting brands
const allLi = document.getElementById("all");
const ikeaLi = document.getElementById("ikea");
const marcosLi = document.getElementById("marcos");
const caressaLi = document.getElementById("caressa");
const liddyLi = document.getElementById("liddy");

// all products
allLi.addEventListener("click", () => {
  productsWithImages.innerHTML = "";
  if (productsWithImages.innerHTML == "") {
    for (const product of allProducts) {
      const newProduct = createAllProduct(product);
      productsWithImages.appendChild(newProduct);
    }
    pageTitle.innerHTML = `Home / Products`;
  }
});

// ikea products
ikeaLi.addEventListener("click", () => {
  productsWithImages.innerHTML = "";
  if (productsWithImages.innerHTML == "") {
    for (const product of allProducts) {
      if (product.brand === "ikea") {
        const newProduct = createAllProduct(product);
        productsWithImages.appendChild(newProduct);
      }
      pageTitle.innerHTML = `Home / Products / ${ikeaLi.innerText}`;
    }
  }
});

// marcos products
marcosLi.addEventListener("click", () => {
  productsWithImages.innerHTML = "";
  if (productsWithImages.innerHTML == "") {
    for (const product of allProducts) {
      if (product.brand === "marcos") {
        const newProduct = createAllProduct(product);
        productsWithImages.appendChild(newProduct);
      }
    }
    pageTitle.innerHTML = `Home / Products / ${marcosLi.innerText}`;
  }
});

// caressa products
caressaLi.addEventListener("click", () => {
  productsWithImages.innerHTML = "";
  if (productsWithImages.innerHTML == "") {
    for (const product of allProducts) {
      if (product.brand === "caressa") {
        const newProduct = createAllProduct(product);
        productsWithImages.appendChild(newProduct);
      }
    }
    pageTitle.innerHTML = `Home / Products / ${caressaLi.innerText}`;
  }
});

// liddy  products
liddyLi.addEventListener("click", () => {
  productsWithImages.innerHTML = "";
  if (productsWithImages.innerHTML == "") {
    for (const product of allProducts) {
      if (product.brand === "liddy") {
        const newProduct = createAllProduct(product);
        productsWithImages.appendChild(newProduct);
      }
    }
    pageTitle.innerHTML = `Home / Products / ${liddyLi.innerText}`;
  }
});
