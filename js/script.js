const navbar = document.querySelector(".navbar")
const openNavbarButton = document.querySelector(".open-navbar-button");
const closeNavbarButton = document.querySelector(".close-navbar-button");
const media = window.matchMedia("(width < 750px)")

function openNavbar() {
    navbar.classList.add("navbar--show");
    openNavbarButton.setAttribute('aria-expended','true');
    navbar.removeAttribute('inert');
    closeNavbarButton.style.display = "block";
}

function closeNavbar() {
    navbar.classList.remove("navbar--show");
    openNavbarButton.setAttribute('aria-expended','false');
    navbar.setAttribute('inert','');
    closeNavbarButton.style.display = "none";
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