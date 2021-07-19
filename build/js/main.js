const accordions = document.querySelectorAll(".accordion");
const titles = document.querySelectorAll(".footer__title");
const MIN_WIDTH_SCREEN = 767;

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
    if (window.innerWidth > MIN_WIDTH_SCREEN) {
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

const buttonCall = document.querySelector(".header__link--call");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".modal__close-button");
const body =  document.querySelector(".page__body");
const userName = document.querySelector("#user");
const forms = document.querySelectorAll("form");
// const tabs = document.querySelectorAll("[tabindex ='0']");

const removeClass = () => {
  modal.classList.remove("modal--opened");
  body.classList.remove("page__body--lock");
}

const getAllClass = (str) => {
  const space = " ";
  return str.split(space);
}

buttonCall.addEventListener("click", () => {

  modal.classList.add("modal--opened");
  body.classList.add("page__body--lock");
  userName.focus();
  // tabs.forEach(tab => {
  //   tab.tabindex = -1;
  // });
});

closeButton.addEventListener("click", () => {
  removeClass();
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape" || evt.key === "Esc") {
    if (modal.classList.contains("modal--opened")) {
      modal.classList.remove("modal--opened");
    }
  }
});

modal.addEventListener("click", (evt) => {
  const allClasses = getAllClass(evt.target.className);

  const currentClass = allClasses.some(element => {
    return element === "modal";
  });

  if (currentClass) {
    removeClass();
  }
});

const initMaskNubmer = (phone) => {
  const maskOptions = {
    mask: "+{7} (000) 000-00-00"
  };

  const mask = IMask(phone, maskOptions);
}

forms.forEach(form => {
  const name = form.querySelector('input[type=text]');
  const phone = form.querySelector('input[type=tel]');
  const message = form.querySelector('textarea');

  initMaskNubmer(phone);

  form.addEventListener("submit", (evt) => {
    if (!name.value || !phone.value || !message.value) {
      evt.preventDefault();
    } else {
      localStorage.setItem("name", name.value);
      localStorage.setItem("tel", phone.value);
      localStorage.setItem("message", message.value);
    }
  });
})
