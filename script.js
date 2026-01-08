const btn = document.getElementById("btn");
const contenido = document.querySelector(".contenido");
const music = document.getElementById("music");

btn.addEventListener("click", () => {
  document.querySelector(".inicio").style.display = "none";
  contenido.classList.remove("oculto");
  music.volume = 0.5;
  music.play();
});
const contenedorCorazones = document.querySelector(".corazones");

function crearCorazon() {
  const corazon = document.createElement("div");
  corazon.classList.add("heart");
  corazon.innerHTML = "❤️";

  corazon.style.left = Math.random() * 100 + "vw";
  corazon.style.fontSize = Math.random() * 20 + 10 + "px";
  corazon.style.animationDuration = Math.random() * 5 + 7 + "s";

  contenedorCorazones.appendChild(corazon);

  setTimeout(() => {
    corazon.remove();
  }, 12000);
}

setInterval(crearCorazon, 600);
