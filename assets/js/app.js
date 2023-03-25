// scroll to top functionality

//select the scroll-to-top button with the id attribute attached to it in the HTML
const scrollUp = document.querySelector("#scroll-up");
//use the click eventListener to get the user’s click action and exploit the scrollTo part
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Nav hamburgerburger selections

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
  ul.classList.toggle("show");

  // Close hamburger menu when a link is clicked

  // Select nav links
  const navLink = document.querySelectorAll(".nav-link");

  navLink.forEach((link) =>
    link.addEventListener("click", () => {
      ul.classList.remove("show");
    })
  );
});
