const accordions = document.querySelectorAll(".accordion");
const titles = document.querySelectorAll(".footer__title");

const removeClasses = () => {
  if (window.innerWidth < 768) {
    titles.forEach(title => {
      title.nextElementSibling.style.display ="none";
      title.classList.remove("footer__title--opened");
      title.classList.add("footer__title--closed");
    })
  }
};

removeClasses();

const changeClass = (evt) => {
  const title = evt.currentTarget;
  const currentAccordion = title.nextElementSibling;
  console.log(title, currentAccordion);

  if (title.classList.contains("footer__title--closed")) {
      removeClasses();
      title.classList.remove("footer__title--closed");
      title.classList.add("footer__title--opened");
      currentAccordion.style.display ="grid"
  } else if (title.classList.contains("footer__title--opened")) {
      title.classList.remove("footer__title--opened");
      title.classList.add("footer__title--closed");
      currentAccordion.style.display ="none";
  }
}

titles.forEach(title => {
  title.addEventListener("click", changeClass)
});

  window.addEventListener("resize", function(e) {
    if (window.innerWidth > 767) {
      titles.forEach(title => {
        title.classList.remove("closed");
        title.classList.add("opened");
        title.nextElementSibling.style.display = "grid";
        title.removeEventListener("click", changeClass);
      });
    }
    else {
      titles.forEach(title => {
        title.addEventListener("click", changeClass)
        removeClasses();
      });
    }
  });
