function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");

    const angle = document.getElementById("angle");
    angle.classList.toggle("show");

    const menuToggle = document.querySelector(".menu-toggle");
    menuToggle.classList.toggle("active");
}