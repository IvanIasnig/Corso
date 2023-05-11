import axios from "/node_modules/axios/dist/esm/axios.min.js";



function photosGen(photos) {
  const card = document.createElement("div");
  card.id = `card-${photos.id}`;
  card.classList.add("col-md-4");
  card.innerHTML = `
  <div class="card shadow-sm h-100 ">
    <img src="${photos.src.original}" alt="${photos.alt}">
    <div class="card-body">
      <h5 class="card-title">${photos.alt}</h5>
      <p class="card-text">
      ${photos.photographer}
      </p>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <button type="button" class="btn btn-sm btn-outline-secondary view-btn">
            View
          </button>
          <button type="button" class="btn btn-sm btn-outline-secondary hide-btn">
            Hide
          </button>
        </div>
        <small class="text-muted">${photos.id}</small>
      </div>
    </div>
  </div>
  `;

  card.querySelector(".hide-btn").addEventListener("click", () => {
    hide(`card-${photos.id}`);
  });

  return card;
}

function hide(cardId) {
  const card = document.getElementById(cardId);
  if (card) {
    card.style.display = "none";
  }
}

async function getBooks() {
  try {
    const apiKey = "idsUrzqTX9qPQ3ABjvlh4GICaqZE8oRzJirhq3uZ95p2v4fhLo5dbR7R";
    const response = await axios.get(
      "https://api.pexels.com/v1/search?query=books",
      {
        headers: {
          Authorization: apiKey,
        },
      }
    );
    console.log(response.data.photos);
    const booksContainer = document.getElementById("books-container");
    response.data.photos.map((photos) => {
      booksContainer.appendChild(photosGen(photos));
    });
  } catch (error) {
    console.error(error);
  }
}

getBooks();


