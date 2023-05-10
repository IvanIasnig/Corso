import axios from "/node_modules/axios/dist/esm/axios.min.js";

function createBookCard(book) {
  const card = document.createElement("div");
  card.classList.add("col-md-4", "mt-4");
  card.innerHTML = `
    <div class="card h-100">
      <img src="${book.img}" alt="${book.title}">
      <div class="card-body">
        <h5 class="card-title">${book.title}</h5>
        <p class="card-text">${book.category}</p>
      </div>
      <div class="card-footer">
        <div>Prezzo: ${book.price}€</div>
        <button id="btnDel" class="btn btn-secondary mt-1" onclick="deleteBook()">Scarta</button>
      </div>
    </div>
  `;

  return card;
}

function deleteBook() {
  card.remove();
}

async function getBooks() {
  try {
    const response = await axios.get(
      "http://striveschool-api.herokuapp.com/books"
    );
    console.log(response.data);
    const booksContainer = document.getElementById("books-container");
    response.data.map((book) => {
      booksContainer.appendChild(createBookCard(book));
    });
  } catch (error) {
    console.error(error);
  }
}

getBooks();
