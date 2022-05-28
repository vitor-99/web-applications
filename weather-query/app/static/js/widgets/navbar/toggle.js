var toggle = document.querySelector(".toggle");
var sideView_navbar = document.querySelector(".sideview-navbar__container");

toggle.addEventListener('click', toggleSideViewNavbar)

function  toggleSideViewNavbar() {
    if (sideView_navbar.style.display == 'none') {
        sideView_navbar.style.display='flex';
    } else {
        sideView_navbar.style.display='none';
    }
}