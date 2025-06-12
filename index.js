function toggleMenu() {
    const sideMenu = document.getElementById("side-menu");
    const body = document.body;


    sideMenu.classList.toggle("active");
    body.classList.toggle("active-menu");
}


document.addEventListener("click", function(event) {
    const sideMenu = document.getElementById("side-menu");
    const menuIcon = document.querySelector(".menu-icon");
    
   
    if (!sideMenu.contains(event.target) && !menuIcon.contains(event.target)) {
       
        sideMenu.classList.remove("active");
        document.body.classList.remove("active-menu");
    }
});


