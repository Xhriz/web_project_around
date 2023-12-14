import Card from "./card.js";
import FormValidator from "./formValidator.js";

const profile=document.querySelector(".profile");
const popup=document.querySelector(".popup");
const profileName=profile.querySelector(".profile__name");
const profileDescription=profile.querySelector(".profile__description");
const popupName=popup.querySelector(".popup__input_name");
const popupDescription=popup.querySelector(".popup__input_description");
const popupAdd=document.querySelector(".popup-add");

function handleProfileFormSubmit(evt){
  evt.preventDefault();
  profileName.textContent=popupName.value;
  profileDescription.textContent=popupDescription.value;
  popup.classList.toggle("popup_opened");
  return;
}

popup.addEventListener('submit', handleProfileFormSubmit);


const initialCards = [
  {
    text: "Vale de Yosemite",
    image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
  },
  {
    text: "Lago Louise",
    image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
  },
  {
    text: "Montanhas Carecas",
    image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
  },
  {
    text: "Latemar",
    image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
  },
  {
    text: "Parque Nacional da Vanoise ",
    image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
  },
  {
    text: "Lago di Braies",
    image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
  }
];

function addCard(item) {
  const card = new Card(item, "#template-card");
  const elementCard = document.querySelector(".elements__list");

  elementCard.prepend(card.generateCard());
}
initialCards.forEach((item)=>{
  addCard(item);
});

const inputTitle= popupAdd.querySelector(".popup-add__input-title");
const inputImage = popupAdd.querySelector(".popup-add__input-link");

function handleCardFormSubmit(evt) {
  evt.preventDefault();

  const card = {
    text: inputTitle.value,
    image: inputImage.value,
  };
  addCard(card);
  popupAdd.classList.remove("popup_opened");
}

popupAdd.addEventListener("submit", handleCardFormSubmit);

const config=({
  formSelector: ".form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__input-error",
  errorClass: "popup__message-error_active"
});

const form= new FormValidator(config, popup);
form.enableValidation();

const formAdd= new FormValidator(config, popupAdd);
formAdd.enableValidation();
