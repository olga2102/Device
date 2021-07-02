const accordions = document.querySelectorAll("#accordion");
const titles = document.querySelectorAll("#title");

titles.forEach(title => {
  console.log('hi');
  title.addEventListener("click", function () {
    const accordion = title.nextElementSibling;

  })
});
































































// const buttons = document.querySelectorAll(".footer__button");
// const contact = document.querySelector(".footer__contacts");
// const section = document.querySelector(".footer__list");
// const accordions = document.querySelectorAll(".accordion");

// buttons.forEach(button => {
//   button.addEventListener("click", function () {
    // debugger;
    // if (button.classList.contains("footer__button--closed")) {
    //   button.classList.remove("footer__button--closed");
    //   button.classList.add("footer__button--opened");
    //   contact.style.display = 'block';
    //   section.style.display = 'block';
    // }

    // if (button.classList.contains("footer__button--opened")) {
    //   button.classList.remove("footer__button--opened");
    //   button.classList.add("footer__button--closed");
    // }

    // this.classList.toggle("footer__button--closed");
    // this.classList.toggle("footer__button--opened");

    // let panel = this.nextElementSibling;
    // if (panel.style.display === "block") {
    //     panel.style.display = "none";
    // } else {
    //     panel.style.display = "block";
    // }


    // accordions.forEach(accordion => {
    //   if (accordion.classList.contains("accordion--opened")) {
    //     accordion.classList.remove("accordion--opened");
    //   }
    //     accordion.classList.add("accordion--opened");
    // })
//   })
// });
