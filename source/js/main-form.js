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
