const pieces = document.querySelectorAll('g[opacity="0"]');
let opacityCount = 0;
let intervalId;

setInterval(opacity, 40);

function opacity() {
  const arrayElOpacita0 = Array.from(pieces);
  const x = Math.floor(Math.random() * arrayElOpacita0.length); // ci dovrebbero essere 276 elementi con opacità 0, quindi mettere arrayElOpacita0.length oppure 277 dovrebbe essere la stessa cosa
  const random = arrayElOpacita0[x];
  random.setAttribute("opacity", "1");
  opacityCount++;
  if (opacityCount === arrayElOpacita0.length) {
    const x = Math.floor(Math.random() * arrayElOpacita0.length);
    const random = arrayElOpacita0[x];
    random.setAttribute("opacity", "0");
    opacityCount--;
  }
}

window.addEventListener("scroll", function () {
  var nav = document.querySelector("#abc");
  var bottone = document.querySelector(".btn");
  var scrollPosition = window.scrollY;
  if (scrollPosition > 400) {
    nav.style.backgroundColor = "white";
    bottone.style.backgroundColor = "rgb(0, 200, 0)";
  } else {
    nav.style.backgroundColor = "rgb(255, 192, 23)";
    bottone.style.backgroundColor = "rgb(0, 0, 0)";
  }
});
