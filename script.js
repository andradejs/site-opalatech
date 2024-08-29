const home = document.getElementById("home");

home.addEventListener("click", function (event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});


const minicurso = document.getElementById("minicursos");

minicurso.addEventListener("click", function (event) {
  event.preventDefault();
  window.scrollTo({
    top: 500,
    behavior: "smooth", 
  });
});


const sobre = document.getElementById("sobre");

sobre.addEventListener("click", function (event) {
  event.preventDefault();
  window.scrollTo({
    top: 1500,
    behavior: "smooth", 
  });
});

