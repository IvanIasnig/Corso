class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
}

function createPet() {
  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const pet = new Pet(petName, ownerName, species, breed);
  console.log(pet);
  const animale = document.querySelector(".animale");
  animale.innerHTML = `Nome dell'animale: <h5>${pet.petName}</h5>Nome del proprietario: <h5>${pet.ownerName}</h5>Specie: <h5>${pet.species}</h5>Razza: <h5>${pet.breed}</h5>`;
}
