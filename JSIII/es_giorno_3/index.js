window.onload = function () {
  const inserisci = document.getElementById("inserisci");
  const elimina = document.getElementById("elimina");

  function saveName(name) {
    localStorage.setItem("nome", name);
  }

  function deleteName() {
    localStorage.removeItem("nome");
  }

  inserisci.addEventListener("click", function (event) {
    event.preventDefault();
    const nameInput = document.getElementById("nome");
    saveName(nameInput.value);
  });

  elimina.addEventListener("click", function () {
    deleteName();
  });

  const counterElement = document.getElementById("counter");

  function storageCounter() {
    const counterValue = sessionStorage.getItem("counter");
    return counterValue;
  }

  function updateCounterDisplay(x) {
    counterElement.textContent = x;
  }

  function incrementCounter() {
    let counterValue = storageCounter();
    counterValue++;
    sessionStorage.setItem("counter", counterValue);
    updateCounterDisplay(counterValue);
  }

  setInterval(incrementCounter, 1000);
  updateCounterDisplay(storageCounter());
};
