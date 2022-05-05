window.onload = inicio;
let sumaCorrecta,a,b;
function inicio() {
  preguntar();
  document.querySelector("button").onclick = comprobar;
  document.querySelector(".tres").onkeydown = teclado;

  function teclado(e) {
    let tecla = e.key;
    if (tecla == "Enter") {
      comprobar();
    }
  }
}

function comprobar() {
  let c = Number(document.querySelector(".tres").value);
  if (sumaCorrecta == c) {
    document.querySelector(".resultados").insertAdjacentHTML
     ("beforeend","<div class='verde'>Es Correcto</div>");
  } else {
    document.querySelector(".resultados").insertAdjacentHTML 
    ("beforeend",`<div class="rojo">El resultado de ${a} + ${b} es ${sumaCorrecta}</div>`);
  }
  preguntar();
}

function preguntar() {
   a = Math.floor(Math.random() * 10);
   b = Math.floor(Math.random() * 10);

  sumaCorrecta = a + b;
  document.querySelector(".uno").value = a;
  document.querySelector(".dos").value = b;
  document.querySelector(".tres").value = "";
  document.querySelector(".tres").focus();
}
