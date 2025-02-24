document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const navMenu = document.getElementById("nav-menu");

    menuIcon.addEventListener("click", () => {
        navMenu.classList.toggle("show-menu");
        console.log("Menu toggled");
    });
});
