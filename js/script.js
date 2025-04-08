const navbar = document.querySelector(".navbar")
const openNavbarButton = document.querySelector(".open-navbar-button");
const closeNavbarButton = document.querySelector(".close-navbar-button");
const media = window.matchMedia("(width < 750px)");
const headerLogo = document.getElementById("header__logo");

function openNavbar() {
    navbar.classList.add("navbar--show");
    openNavbarButton.setAttribute('aria-expended','true');
    openNavbarButton.style.display = "none";
    navbar.removeAttribute('inert');
    closeNavbarButton.style.display = "block";
    headerLogo.style.position = "fixed";
    headerLogo.style.top = "5vh";
    headerLogo.style.left = "5vw";
 }

function closeNavbar() {
    navbar.classList.remove("navbar--show");
    openNavbarButton.setAttribute('aria-expended','false');
    navbar.setAttribute('inert','');
    closeNavbarButton.style.display = "none";
    openNavbarButton.style.display = "block";
    headerLogo.style.position = "static";
}

function updateNavbar(e) {
    const isMobile = e.matches;
    if (isMobile){
        navbar.setAttribute('inert','');
    }
    else {
        navbar.removeAttribute('inert');
    }
}

updateNavbar(media);

media.addEventListener("change",(e) => updateNavbar(e))
openNavbarButton.addEventListener("click",openNavbar);
closeNavbarButton.addEventListener("click",closeNavbar);