const navbar = document.querySelector(".navbar")
const openNavbarButton = document.querySelector(".open-navbar-button");
const closeNavbarButton = document.querySelector(".close-navbar-button");
const media = window.matchMedia("(width < 750px)");
const headerLogo = document.getElementById("header__logo");

function openNavbar() {
    navbar.classList.add("navbar--show");
    openNavbarButton.setAttribute('aria-expanded','true');
    openNavbarButton.classList.remove("button--show");
    closeNavbarButton.classList.add("button--show");
    navbar.removeAttribute('inert');
    headerLogo.style.position = "fixed";
    headerLogo.style.top = "5vh";
    headerLogo.style.left = "5vw";
    closeNavbarButton.removeAttribute('inert');
 }

function closeNavbar() {
    navbar.classList.remove("navbar--show");
    openNavbarButton.classList.add("button--show");
    openNavbarButton.setAttribute('aria-expanded','false');
    closeNavbarButton.classList.remove("button--show");
    navbar.setAttribute('inert','');
    headerLogo.style.position = "static";
    closeNavbarButton.setAttribute('inert','');
}

function updateNavbar(e) {
    const isMobile = e.matches;
    if (isMobile){
        navbar.setAttribute('inert','');
        openNavbarButton.removeAttribute('inert');
    }
    else {
        navbar.removeAttribute('inert');
        openNavbarButton.setAttribute('inert','');
    }
}

updateNavbar(media);

media.addEventListener("change",(e) => updateNavbar(e))
openNavbarButton.addEventListener("click",openNavbar);
closeNavbarButton.addEventListener("click",closeNavbar);