const menu_button = document.querySelector(".menu-btn");
const close_button = document.querySelector(".close-button");
const navbar = document.querySelector(".side-navbar");
const overlay = document.getElementById("overlay");

menu_button.addEventListener(
    "click", ()=> {
        navbar.classList.add("active");
        overlay.style.display = "block";
    }
);

close_button.addEventListener(
    "click", ()=> {
        navbar.classList.remove("active");
        overlay.style.display = "none";
    }
);

overlay.addEventListener(
    "click", ()=> {
        navbar.classList.remove("active");
        overlay.style.display = "none";
    }
);