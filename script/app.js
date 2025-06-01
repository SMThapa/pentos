const navbar = document.querySelector("nav");
window.addEventListener("scroll", function () {
  if (window.scrollY === 0 ) {
    navbar.classList.remove("scrolled");
  } else {    
    navbar.classList.add("scrolled");
  } 
});


//accordion
const items = document.querySelectorAll('.accordion button');
function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}
items.forEach((item) => item.addEventListener('click', toggleAccordion));
