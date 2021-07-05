const buttonCall = document.querySelector(".header__link--call");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".modal__close-button");
const body =  document.querySelector(".page__body");
const userName = document.querySelector("#user");
const userPhoneNumber = document.querySelector("#phone");
const message = document.querySelector("#query");
const form = document.querySelector("form");

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

form.addEventListener("submit", (evt) => {
  if (!userName.value || !userPhoneNumber.value || !message.value) {
    evt.preventDefault();
  } else {
    localStorage.setItem("tel", userName.value);
    localStorage.setItem("email", userPhoneNumber.value);
    localStorage.setItem("message", message.value);
  }
});

const initMaskNubmer = () => {
  let maskOptions = {
    mask: "+{7} (000) 000-00-00"
  };

  let mask = IMask(userPhoneNumber, maskOptions);
}

initMaskNubmer();
