// Переменные
const editButton = document.querySelector(".button_type_edit");
const addButton = document.querySelector(".button_type_add");
const authorCloseButton = document.querySelector(".button_type_author");
const placeCloseButton = document.querySelector(".button_type_place");
const imageCloseButton = document.querySelector(".button_type_image");
const authorPopup = document.querySelector(".popup_type_author");
const cardPopup = document.querySelector(".popup_type_card");
const imagePopup = document.querySelector(".popup_type_image");

/*Функции открытия попапа*/
function openPopup(popupElement) {
  popupElement.classList.add("popup_opened");
}

/*Функция закрытия попапа*/
function closePopup(popupElement) {
  popupElement.classList.remove("popup_opened");
}

/*Функция открытия попапа изображения*/
function openImagePopup() {
  openPopup(imagePopup);
}

/*Функция закрытия попапа изображения*/
function closeImagePopup() {
  closePopup(imagePopup);
}

/*Вешаем обработчики на кнопки попапов*/
imageCloseButton.addEventListener("click", function () {
  closePopup(imagePopup);
});

editButton.addEventListener("click", function () {
  openPopup(authorPopup);
});

authorCloseButton.addEventListener("click", function () {
  closePopup(authorPopup);
});

addButton.addEventListener("click", function () {
  openPopup(cardPopup);
});

placeCloseButton.addEventListener("click", function () {
  closePopup(cardPopup);
});

//Submit
// Находим форму в DOM
const formElement = authorPopup.querySelector(".popup__form");
// Находим поля формы в DOM
const authorNameInput = formElement.querySelector("#user");
const jobInput = formElement.querySelector("#passion");

// Обработчик «отправки» формы
function submitFormProfile(evt) {
  evt.preventDefault();

  const authorNameValue = authorNameInput.value;
  const authorJobValue = jobInput.value;

  const profileName = document.querySelector(".profile__name");
  const jobName = document.querySelector(".profile__description");

  profileName.textContent = authorNameValue;
  jobName.textContent = authorJobValue;
  closePopup(authorPopup);
}

formElement.addEventListener("submit", submitFormProfile);
