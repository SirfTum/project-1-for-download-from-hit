const AddEventOnElements = (elem, elemType, callback) => {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener(elemType, callback);
  }
};

const NavbarToggler = document.querySelectorAll("[data-nav-toggler]");
const Navbar = document.querySelector("[data-navbar]");

const NavbarActive = () => {
  Navbar.classList.toggle("active");
};
AddEventOnElements(NavbarToggler, "click", NavbarActive);

const Header = document.querySelector("[data-header]");
const HeaderActive = () => {
  if (window.scrollY > 50) {
    Header.classList.add("active");
  } else {
    Header.classList.remove("active");
  }
};

window.addEventListener("scroll", HeaderActive);
