import "./index.css";
import Card from "../components/card.js";
import FormValidator from "../components/formValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import { initialCards } from "../components/utils.js";
import {popupName, popupDescription, popup, popupAdd, buttonAdd, popupButtonAdd, imgZoom, popupImgName, editPopup, selectors} from "../components/utils.js";

const popupWithImage= new PopupWithImage(".popup-image", imgZoom, popupImgName);
popupWithImage.setEventListeners();

const cardList= new Section({
  items: initialCards,
  renderer: (item)=>{
    const card= new Card(item, "#template-card", popupWithImage);
    const cardElement= card.generateCard();
    cardList.addItem(cardElement);
  }
}, ".elements__list");

cardList.renderer();

const userInfo = new UserInfo(selectors);

const popupProfile = new PopupWithForm({
  popupSelector: ".popup",
  callBack: () =>{

   userInfo.setUserInfo(popupName, popupDescription);

  },
});
popupProfile.setEventListeners();

editPopup.addEventListener("click", () => {
  const { name, about } = userInfo.getUserInfo();
  popupName.value=name;
  popupDescription.value=about;
  popupProfile.open();
});


const popupAddForm = new PopupWithForm({
  popupSelector: ".popup-add",
  callBack: () => {
    const dataCard = {
      text: document.querySelector(".popup-add__input-title").value,
      image: document.querySelector(".popup-add__input-link").value,
    };
    if(dataCard.text || dataCard.image === ""){
      popupButtonAdd.classList.add("popup__button_inactive");
      popupButtonAdd.disabled=true;
    }
    const card = new Card(dataCard, "#template-card", popupWithImage);
    const cardElement = card.generateCard();
    document.querySelector(".elements__list").prepend(cardElement);
  },
});
popupAddForm.setEventListeners();
buttonAdd.addEventListener("click", () => {
  popupAddForm.open();
});

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
