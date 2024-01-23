import PopupWithConfirmation from "./PopupWithConfirmation";
import { api } from "../pages/index";

export default class Card {
  constructor(data, cardSelector, popupWithImage) {
    this._text = data.name;
    this._image = data.link;
    this.owner = data.owner._id;
    this._cardId = data._id;
    this._likes = data.likes;
    this._cardSelector = cardSelector;
    this._popupWithImage = popupWithImage;
  }

  _getTemplate() {
    const templateCard = document.querySelector(this._cardSelector);
    const cardElement = templateCard.content.cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListener();
    this._element.querySelector(".elements__image").src = this._image;
    this._element.querySelector(".elements__image").alt = this._text;
    this._element.querySelector(".elements__title").textContent = this._text;
    this._element.querySelector(".elements__number-likes").textContent =
      this._likes.length;
    return this._element;
  }

  isLiked() {
    const myId = "8558a0b313baa67f031edaec";
    for (let i = 0; i < this._likes.length; i++) {
      if (this._likes[i]._id === myId) {
        return true;
      }
    }
    return false;
  }

  _like() {
    const buttonLike = this._element.querySelector(".elements__button-like");
    const numberLikes = this._element.querySelector(".elements__number-likes");
    const myId = "8558a0b313baa67f031edaec";

    for (let i = 0; i < this._likes.length; i++) {
      if (this._likes[i]._id === myId) {
        buttonLike.classList.add("elements__button-like_click");
      }
    }

    const liked = () => {
      if (!this.isLiked()) {
        api.addLikes(this._cardId).then((res) => {
          buttonLike.classList.add("elements__button-like_click");
          numberLikes.textContent = parseInt(++this._likes.length);
          this._likes = res.likes;
        });
      } else {
        api.removeLikes(this._cardId).then((res) => {
          buttonLike.classList.remove("elements__button-like_click");
          this._likes = res.likes;
          numberLikes.textContent = this._likes.length;
        });
      }
    };
    buttonLike.addEventListener("click", liked);
  }

  _trash() {
    if (this.owner === "8558a0b313baa67f031edaec") {
      const elementTrash = this._element.querySelector(".elements__trash");
      const popupDelete = new PopupWithConfirmation({
        popupSelector: ".popup-trash",
        callBack: () => {
          api
            .removeCard(this._cardId)
            .then(() => {
              const removeElement = elementTrash.closest(".elements__card");
              removeElement.remove();
            })
            .catch((err) => {
              console.log(err);
            });
        },
      });

      elementTrash.addEventListener("click", () => {
        popupDelete.open();
        popupDelete.setEventListeners();
      });
    } else {
      this._element
        .querySelector(".elements__trash")
        .classList.add("elements__trash-hidden");
    }
  }

  _setEventListener() {
    this._like();
    this._trash();

    this._element
      .querySelector(".elements__image")
      .addEventListener("click", () => {
        this.handleImageClick();
      });
  }

  handleImageClick() {
    this._popupWithImage.open(this._image, this._text);
  }
}
