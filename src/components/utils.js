const profile = document.querySelector(".profile");
export const popup = document.querySelector(".popup");
export const editPopup = profile.querySelector(".profile__button-edit");
export const profileName = profile.querySelector(".profile__name");
export const profileDescription = profile.querySelector(
  ".profile__description"
);
export const popupName = popup.querySelector(".popup__input_name");
export const popupDescription = popup.querySelector(
  ".popup__input_description"
);
export const buttonAdd = profile.querySelector(".profile__button-add");
export const popupAdd = document.querySelector(".popup-add");
export const popupImage = document.querySelector(".popup-image");
export const elementImg = popupImage.querySelector(".elements__image");
export const imgZoom = popupImage.querySelector(".popup-image__zoom");
export const popupImgName = popupImage.querySelector(".popup-image__name");
export const popupButtonAdd = popupAdd.querySelector(".popup-add__button");

export const selectors = {
  nameSelector: ".profile__name",
  aboutSelector: ".profile__description",
};

export const initialCards = [
  {
    text: "Vale de Yosemite",
    image:
      "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    text: "Lago Louise",
    image:
      "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    text: "Montanhas Carecas",
    image:
      "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    text: "Latemar",
    image:
      "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    text: "Parque Nacional da Vanoise ",
    image:
      "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    text: "Lago di Braies",
    image:
      "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];
