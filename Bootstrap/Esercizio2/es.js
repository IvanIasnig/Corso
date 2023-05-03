window.addEventListener("load", () => {
  const button = document.querySelector("#myButton");
  button.addEventListener("mouseover", () => {
    const x = Math.floor(Math.random() * -300);
    const y = Math.floor(Math.random() * -300);
    button.style.transform = `translate(${x}px, ${y}px)`;
  });
});

function counterCard() {
  const elements = document.querySelectorAll(".card").length;

  const truffa = elements + 1;

  alert(truffa);
}
