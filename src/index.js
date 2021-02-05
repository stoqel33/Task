import Splide from "@splidejs/splide";
import "./sass/index.sass";
import "focus-visible";

if (document.body.clientWidth <= 1281) {
  new Splide("#splide", {
    perPage: 1,
    perMove: 1,
    arrows: false,
    breakpoints: {
      961: {
        pagination: false,
      },
      667: {
        pagination: true,
      },
    },
  }).mount();
} else {
  document.getElementById("splide").removeAttribute("id");
  document.getElementById("splide__list").classList.remove("splide__list");
  document.getElementById("splide__track").classList.remove("splide__track");
}

const navBar = document.getElementById("nav-bar");
const team = document.getElementById("team");
const contact = document.getElementById("contact");

document
  .getElementById("button-team")
  .addEventListener("click", () =>
    scrollTo(0, team.offsetTop - navBar.offsetHeight)
  );
document
  .getElementById("button-contact")
  .addEventListener("click", () =>
    scrollTo(0, contact.offsetTop - navBar.offsetHeight)
  );
document
  .getElementById("button-scroll")
  .addEventListener("click", () =>
    scrollTo(0, team.offsetTop - navBar.offsetHeight)
  );
document
  .getElementById("button-ico")
  .addEventListener("click", () => scrollTo(0, 0));
