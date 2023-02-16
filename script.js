const button = document.querySelector("#the-button");
const menu = document.querySelector("#mobile-menu");

button.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});


var typed = new Typed(".typed", {
  strings: [
    "The <br> World",
    "The <br> Universe",
    "The <br> Galaxy",
    "The <br> Solar System",
    "The <br> Earth",
    "The <br> Moon",
    "The <br> Sun",
  ],
  typeSpeed: 75,
  backSpeed: 75,
  backDelay: 1000,

  loop: true,
});

const accordionHeader = document.querySelectorAll(".accordion-header");
accordionHeader.forEach((header) => {
  header.addEventListener("click", function () {
    const accordionContent =
      header.parentElement.querySelector(".accordion-content");
    let accordionMaxHeight = accordionContent.style.maxHeight;

    // Condition handling
    if (accordionMaxHeight == "0px" || accordionMaxHeight.length == 0) {
      accordionContent.style.maxHeight = `${
        accordionContent.scrollHeight + 32
      }px`;
      header.querySelector(".fas").classList.remove("fa-plus");
      header.querySelector(".fas").classList.add("fa-minus");
      header.parentElement.classList.add("bg-indigo-50");
    } else {
      accordionContent.style.maxHeight = `0px`;
      header.querySelector(".fas").classList.add("fa-plus");
      header.querySelector(".fas").classList.remove("fa-minus");
      header.parentElement.classList.remove("bg-indigo-50");
    }
  });
});