var typed = new typed("span", {
  strings: ["João Vítor", "Developer", "Design"],
  typeSpeed: 70,
  backSpeed: 60,
  loop: true,
});
let contador = 1;

setInterval(function () {
  document.getElementById("slide" + contador).checked = true;
  contador++;

  if (counter > 5) {
    contador = 1;
  }
}, 3000);
