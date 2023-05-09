function displayProducts(products) {
  const productList = document.getElementById("product-list");

  products.map((product) => {
    const productDiv = document.createElement("div");

    const thumbnail = document.createElement("img");
    thumbnail.src = product.thumbnail;
    thumbnail.alt = product.title;

    const title = document.createElement("h3");
    title.textContent = product.title;

    const price = document.createElement("p");
    price.textContent = `Price: $${product.price}`;

    const rating = document.createElement("p");
    rating.textContent = `Rating: ${product.rating}`;

    productDiv.appendChild(thumbnail);
    productDiv.appendChild(title);
    productDiv.appendChild(price);
    productDiv.appendChild(rating);

    productList.appendChild(productDiv);
  });
}

fetch("products.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    displayProducts(data);
    let i = 0;
    document.getElementById("inserisci").addEventListener("click", function () {
      const product = data[1];
      let immagine = document.querySelector("img");
      immagine.src = product.images[i];
      i++;
      if (i === product.images.length) {
        i = 0;
      }
    });
  });
