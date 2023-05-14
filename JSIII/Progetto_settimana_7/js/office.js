import axios from "../node_modules/axios/dist/esm/axios.min.js";

//______________________________________________________________________________________
//-----------------------------POST-----------------------------------------------------
//______________________________________________________________________________________

document.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const brand = document.getElementById("brand").value;
  const imageUrl = document.getElementById("imageUrl").value;
  const price = document.getElementById("price").value;

  try {
    const response = await axios.post(
      "https://striveschool-api.herokuapp.com/api/product/",
      {
        name,
        description,
        brand,
        imageUrl,
        price,
      },
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMGViODg4Zjc0MDAwMTQyODc1MWYiLCJpYXQiOjE2ODM4ODU3NTMsImV4cCI6MTY4NTA5NTM1M30._PWbS3GHkgUppZJO25PYfyd5_t1jFiAdJ879irhTSpk",
        },
      }
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
});

//__________________________________________________________________________________________
//--------------------------------------GET-------------------------------------------------
//_________________________________________________________________________________________

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
  } catch (error) {
    console.error(error);
  }
}
getBooks();

//funzione collegata al get
function productGen(product) {
  const card = document.createElement("div");
  card.classList.add("col-md-4","mt-4");
  card.innerHTML = `
  <div class="card shadow-sm h-100">
    <img src="${product.imageUrl}" alt="foto">
    <div class="card-body">
      <h5 class="card-title">${product.name}</h5>
      <p class="card-text">
      ${product.description}</p>
      <p>${product.brand}</p>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <button type="button" class="btn btn-sm btn-outline-secondary modify-btn">
            Modify
          </button>
          <button type="button" class="btn btn-sm btn-outline-secondary del-btn">
            Remove
          </button>
        </div>
        <small class="text-muted">${product.price}€</small>
      </div>
    </div>
  </div>
  `;

  card.querySelector(".del-btn").addEventListener("click", () => {
    deleteProduct(product._id);
  });

  card.querySelector(".modify-btn").addEventListener("click", () => {
    showModifyForm(product);
  });

  return card;
}

//ALTRA FUNZIONE
function showModifyForm(product) {
  const formHtml = `
    <form id="modify-form" class="mt-3" style="border: 1px solid black; border-radius: 20px; background-image: url(../assets/img/photo-1553949345-eb786bb3f7ba.jpg); color:white;">
      <fieldset>
      <legend class="ms-3"><b>${product.name}</b></legend>
      <input type="text" id="modify-name" value="${product.name}" class="m-3" required>
      <input type="text" id="modify-description" value="${product.description}" class="ms-3 mt-1" required>
      <input type="text" id="modify-brand" value="${product.brand}" class="ms-3 mt-1 mb-1" required>
      <input type="text" id="modify-imageUrl" value="${product.imageUrl}" class="ms-3 mt-1 mb-2" required>
      <input type="number" id="modify-price" value="${product.price}" class="ms-3 mt-1 mb-2" required> 
      <button type="submit" class="ms-3 mt-1 mb-2 btn btn-success">Save Changes</button>
      </fieldset>
    </form>
  `;

  const modifyFormContainer = document.getElementById("modify-form-container");
  modifyFormContainer.innerHTML = formHtml;

  document
    .getElementById("modify-form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();

      const updatedProduct = {
        name: document.getElementById("modify-name").value,
        description: document.getElementById("modify-description").value,
        brand: document.getElementById("modify-brand").value,
        imageUrl: document.getElementById("modify-imageUrl").value,
        price: document.getElementById("modify-price").value,
      };

      await modifyProduct(product._id, updatedProduct);
      modifyFormContainer.innerHTML = "";
    });
}

//__________________________________________________________________________________________
//--------------------------------------DELETE----------------------------------------------
//__________________________________________________________________________________________

async function deleteProduct(productId) {
  let del = confirm("Are you sure you want to delete this product?")
  if (del == true) {
  try {
    const apiKey =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMGViODg4Zjc0MDAwMTQyODc1MWYiLCJpYXQiOjE2ODM4ODU3NTMsImV4cCI6MTY4NTA5NTM1M30._PWbS3GHkgUppZJO25PYfyd5_t1jFiAdJ879irhTSpk";
    const response = await axios.delete(
      `https://striveschool-api.herokuapp.com/api/product/${productId}`,
      {
        headers: {
          Authorization: apiKey,
        },
      }
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}}

//______________________________________________________________________________________
//-----------------------------------------PUT------------------------------------------
//______________________________________________________________________________________

async function modifyProduct(productId, updatedProduct) {
  let mod = confirm("Are you sure you want to modify this product?");
  if (mod == true) {
  try {
    const apiKey =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMGViODg4Zjc0MDAwMTQyODc1MWYiLCJpYXQiOjE2ODM4ODU3NTMsImV4cCI6MTY4NTA5NTM1M30._PWbS3GHkgUppZJO25PYfyd5_t1jFiAdJ879irhTSpk";

    const response = await axios.put(
      `https://striveschool-api.herokuapp.com/api/product/${productId}`,
      updatedProduct,
      {
        headers: {
          Authorization: apiKey,
        },
      }
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
}
