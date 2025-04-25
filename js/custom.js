(function () {
    let year = new Date().getFullYear();
    document.querySelector("#currentYear").innerHTML = year;
})();

function scrollToHome() {
    const heroSection = document.getElementById('home');
    heroSection.scrollIntoView({ behavior: 'smooth' });
}

const boton = document.getElementById("mostrar-texto");
const texto = document.getElementById("asesoramiento-texto");

if(boton && texto){
boton.addEventListener("click", function(e) {
  e.preventDefault(); 
  texto.classList.toggle("oculto");
});
};