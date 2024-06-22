document.addEventListener('DOMContentLoaded', function () {
    function toggleMenu() {
        var navbar = document.getElementById("navbar");
        navbar.classList.toggle("responsive");
    }
    document.querySelector('.menu-icon').addEventListener('click', toggleMenu);
})