import axios from "../node_modules/axios/dist/esm/axios.min.js";

async function getProductDetails() {
  const id = new URLSearchParams(window.location.search).get("id");

  if (!id) {
    return;
  }

  try {
    const apiKey =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMGViODg4Zjc0MDAwMTQyODc1MWYiLCJpYXQiOjE2ODM4ODU3NTMsImV4cCI6MTY4NTA5NTM1M30._PWbS3GHkgUppZJO25PYfyd5_t1jFiAdJ879irhTSpk";
    const response = await axios.get(
      `https://striveschool-api.herokuapp.com/api/product/${id}`,
      
      {
        headers: {
          Authorization: apiKey,
        },
      }
    );
    displayProductDetails(response.data);
  } catch (error) {
    console.error(error);
  }
}
function displayProductDetails(product) {
  const productDetails = document.getElementById("product-details");
  console.log(product);
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
  <div class="container">
  <div class="row no-gutters mt-5">
      <div class="col-md-6">
          <div class="img-container">
              <img src="${product.imageUrl}" class="img-fluid rounded shadow-lg" alt="foto">
          </div>
      </div>
      <div class="col-md-6">
          <div class="card shadow-lg p-3 bg-white rounded">
              <div class="card-body product-info">
                  <h5 class="card-title font-weight-bold">${product.name}</h5>
                  <p class="card-text">${product.description}</p>
                  <p class="card-text">Brand: <span class="font-weight-bold">${product.brand}</span></p>
                  <p class="card-text">Link: <a href="${product.imageUrl}" target="_blank" class="text-decoration-none">Image ${product.name}</a></p>
                  <p class="card-text">Price: <span class="font-weight-bold">${product.price} €</span></p>
                  <p class="card-text">ID: <span class="font-weight-bold">${product._id}</span></p>
                  <p class="card-text">Created at: <span class="font-weight-bold">${product.createdAt.slice(0,10)}</span></p>
                  <p class="card-text">Updated at: <span class="font-weight-bold">${product.updatedAt.slice(0,10)}</span></p>
                  <a href="../html/homePage.html" class="btn btn-primary">Back to Home page</a>
              </div>
          </div>
      </div>
  </div>
</div>
  `;
  productDetails.appendChild(card);
}
getProductDetails();
