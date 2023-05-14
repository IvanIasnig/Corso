import axios from "../node_modules/axios/dist/esm/axios.min.js";

//Spinner

const spinner = document.getElementById("spinner");

function showSpinner() {
  spinner.style.display = "block";
}

showSpinner();

function hideSpinner() {
  spinner.style.display = "none";
}
// GET
async function getBooks() {
  try {
    const apiKey =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMGViODg4Zjc0MDAwMTQyODc1MWYiLCJpYXQiOjE2ODM4ODU3NTMsImV4cCI6MTY4NTA5NTM1M30._PWbS3GHkgUppZJO25PYfyd5_t1jFiAdJ879irhTSpk";
    const response = await axios.get(
      "https://striveschool-api.herokuapp.com/api/product/",
      {
        headers: {
          Authorization: apiKey,
        },
      }
    );
    console.log(response.data);
    const booksContainer = document.getElementById("books-container");
    response.data.map((product) => {
      booksContainer.appendChild(productGen(product));
    });
    hideSpinner()
  } catch (error) {
    console.error(error);
  }
}
getBooks();

//funzione collegata al get
function productGen(product) {
  const card = document.createElement("div");
  card.classList.add("col-md-4", "mb-3");
  card.innerHTML = `
    <div class="card shadow-sm h-100 ">
      <img src="${product.imageUrl}" alt="foto" >
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">
        ${product.description}</p>
        <p>${product.brand}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary modify-btn">
              <a href="../html/Office.html" class="text-dark text-decoration-none">Modify</a>
            </button>
            <button type="button" class="btn btn-sm text-dark btn-outline-secondary del-btn">
               <a href="./details.html?id=${product._id}" class="text-dark text-decoration-none">Discover</a>
            </button>
          </div>
          <small class="text-muted">${product.price}€</small>
        </div>
      </div>
    </div>
    `;

  return card;
}

