const pieces = document.querySelectorAll('g[opacity="0"]');
let opacityOneCount = 0;

setInterval(toggleOpacity, 50);

function toggleOpacity() {
  const arrayElOpacita0 = Array.from(pieces);
  const x = Math.floor(Math.random() * arrayElOpacita0.length); // ci dovrebbero essere 276 elementi con opacità 0, quindi mettere arrayElOpacita0.length oppure 277 dovrebbe essere la stessa cosa
  const randomPiece = arrayElOpacita0[x];
  randomPiece.setAttribute("opacity", "1");
  opacityOneCount++;
  if (opacityOneCount === 100) {
    opacityOneCount = 0;
    pieces.forEach((M) => M.setAttribute("opacity", "0"));
  }
}

window.addEventListener("scroll", function () {
  var nav = document.querySelector("#abc");
  var bottone = document.querySelector(".btn");
  var scrollPosition = window.scrollY;
  if (scrollPosition > 200) {
    nav.style.backgroundColor = "white";
    bottone.style.backgroundColor = "rgb(2, 71, 0)";
  } else {
    nav.style.backgroundColor = "rgb(255, 192, 23)";
    bottone.style.backgroundColor = "rgb(0, 0, 0)";
  }
});
