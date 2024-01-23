import "./index.css";
import Card from "../components/card.js";
import FormValidator from "../components/formValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/API.js";
import {
  popupName,
  popupDescription,
  popup,
  popupAdd,
  buttonAdd,
  imgZoom,
  popupImgName,
  editPopup,
  selectors,
  profilePhoto,
  popupProfileImage,
  popupInputPhotoProfile,
} from "../components/utils.js";

const popupWithImage = new PopupWithImage(
  ".popup-image",
  imgZoom,
  popupImgName
);
popupWithImage.setEventListeners();

const userInfo = new UserInfo(selectors);

export const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_ptbr_08",
  headers: {
    authorization: "b469dc0c-ae24-443f-a0e8-f771ca7b4117",
    "Content-Type": "application/json",
  },
});

api
  .getInitialCards()
  .then((result) => {
    const cardList = new Section(
      {
        items: result,
        renderer: (item) => {
          const card = new Card(item, "#template-card", popupWithImage);
          const cardElement = card.generateCard();
          cardList.addItem(cardElement);
        },
      },
      ".elements__list"
    );
    cardList.renderer();
  })
  .catch((err) => {
    console.log(err);
  });

const popupAddForm = new PopupWithForm({
  popupSelector: ".popup-add",
  callBack: () => {
    api
      .addCard({
        name: document.querySelector(".popup-add__input-title").value,
        link: document.querySelector(".popup-add__input-link").value,
      })
      .then((result) => {
        const card = new Card(result, "#template-card", popupWithImage);
        const cardElement = card.generateCard();
        document.querySelector(".elements__list").prepend(cardElement);
      })
      .catch((err) => {
        console.log(err);
      });
  },
});

popupAddForm.setEventListeners();
buttonAdd.addEventListener("click", () => {
  popupAddForm.open();
});

api
  .getUserInfo()
  .then(({ name, about, avatar }) => {
    userInfo.setUserInfo(name, about, avatar);
  })
  .catch((err) => {
    console.log(err);
  });

const popupProfile = new PopupWithForm({
  popupSelector: ".popup",
  callBack: () => {
    api.editUserInfo(popupName, popupDescription);
  },
});
popupProfile.setEventListeners();

editPopup.addEventListener("click", () => {
  const { name, about } = userInfo.getUserInfo();
  popupName.value = name;
  popupDescription.value = about;
  popupProfile.open();
});

const avatarPopup = new PopupWithForm({
  popupSelector: ".popup-photo-profile",
  callBack: ({ avatar }) => {
    api.editAvatar({
      avatar: popupInputPhotoProfile.value,
    });
    userInfo.setUserInfo(avatar);
  },
});
avatarPopup.setEventListeners();

profilePhoto.addEventListener("click", () => {
  avatarPopup.open();
});

const config = {
  formSelector: ".form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__input-error",
  errorClass: "popup__message-error_active",
};

const form = new FormValidator(config, popup);
form.enableValidation();

const formAdd = new FormValidator(config, popupAdd);
formAdd.enableValidation();

const formProfile = new FormValidator(config, popupProfileImage);
formProfile.enableValidation();
