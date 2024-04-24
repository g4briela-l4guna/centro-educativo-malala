let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');

}
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");

    menuToggle.addEventListener("click", function() {
        navbar.classList.toggle("responsive");
    });
});


// Obtener elementos del DOM
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

// Función para alternar la clase 'active' en el menú
menuToggle.addEventListener('click', function() {
    navbar.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function() {
    const accordionButtons = document.querySelectorAll(".accordion-button");

    // Agregar un evento de clic a cada botón del acordeón
    accordionButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Obtener el contenido asociado al botón
            const collapse = button.nextElementSibling;

            // Alternar la clase 'show' en el contenido
            collapse.classList.toggle("show");

            // Cambiar el atributo 'aria-expanded' del botón
            const ariaExpanded = button.getAttribute("aria-expanded") === "true" ? "false" : "true";
            button.setAttribute("aria-expanded", ariaExpanded);
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            answer.classList.toggle('active');
        });
    });
});
