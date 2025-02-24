function toggleMenu() {
    console.log("Menu button clicked!"); // Debugging test
    const menu = document.getElementById("nav-menu");
    menu.classList.toggle("show-menu");

    // Additional debug to check class toggling
    if (menu.classList.contains("show-menu")) {
        console.log("Menu is now visible.");
    } else {
        console.log("Menu is now hidden.");
    }
}
