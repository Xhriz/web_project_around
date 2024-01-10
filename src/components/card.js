export default class Card{
  constructor(data, cardSelector, popupWithImage){
  this._text=data.text;
  this._image=data.image;
  this._cardSelector=cardSelector;
  this._popupWithImage = popupWithImage;
}

_getTemplate(){
  const templateCard=document.querySelector(this._cardSelector);
  const cardElement=templateCard.content.cloneNode(true);
  return cardElement;
  }

generateCard(){
  this._element= this._getTemplate();
  this._setEventListener();
  this._element.querySelector(".elements__image").src=this._image;
  this._element.querySelector(".elements__image").alt = this._text;
  this._element.querySelector(".elements__title").textContent=this._text;
  return this._element;
  }

  _like(){
    const buttonLike=this._element.querySelector(".elements__button-like");
    buttonLike.addEventListener("click", () => {
    buttonLike.classList.toggle("elements__button-like_click");
  });
    }

    _trash(){
  const elementTrash=this._element.querySelector(".elements__trash");
  elementTrash.addEventListener("click", ()=>{
  const removeElement = elementTrash.closest(".elements__card");
  removeElement.remove();
});
}

_setEventListener(){
  this._like();
  this._trash();
  this._element.querySelector(".elements__image").addEventListener("click", () => {
  this.handleImageClick();
  });
}

handleImageClick() {
  this._popupWithImage.open(this._image, this._text);
}
}
