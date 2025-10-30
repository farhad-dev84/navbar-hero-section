// navbar scroll for navbar links
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({behavior: 'smooth'});
  });
});

// navbar shadow on scroll
const navbar = document.getElementsByClassName("navbar");
window.addEventListener("scroll", () => {
  if(window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});