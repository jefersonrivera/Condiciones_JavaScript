const imagen = document.getElementById("imagen");
imagen.addEventListener("click", () => {
  if (imagen.style.border === "") {
    imagen.style.border = "2px solid red";
  } else {
    imagen.style.border = "";
  }
});
// fin del probñema 1

// problema 2

const verificar = document.getElementById("btnverificar");
const mensajeDiv = document.getElementById("mensaje");
verificar.addEventListener("click", function () {
  let sticker1 = parseInt(document.getElementById("input1").value);

  let sticker2 = parseInt(document.getElementById("input2").value);
  let sticker3 = parseInt(document.getElementById("input3").value);
  let totalStickers = sticker1 + sticker2 + sticker3;
  if (totalStickers <= 10) {
    mensajeDiv.textContent = "Lleva " + totalStickers + " stickers";
  } else {
    mensajeDiv.textContent = "Llevas demasiados stickers";
  }
});

// fin problema 2

// problema 3

let ingresar = document.getElementById("btningresar");
let mensaje = document.getElementById("mensaje2");

ingresar.addEventListener("click", function () {
  const selecta = parseInt(document.getElementById("select1").value);
  const selectb = parseInt(document.getElementById("select2").value);
  const selectc = parseInt(document.getElementById("select3").value);
  if (selecta === 9 && selectb === 1 && selectc === 1) {
    mensaje.innerText = "password 1 correcto";
  } else if (selecta === 7 && selectb === 1 && selectc === 4) {
    mensaje.innerText = "password 2 correcto";
  } else {
    mensaje.innerText = "password incorrecto";
  }
});

// fin froblema 3
