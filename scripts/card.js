export default class Card{
  constructor(data, cardSelector){
    this._text=data.text;
    this._image=data.image;
    this._cardSelector=cardSelector;
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

_zoom(){
  const elementName=this._element.querySelector(".elements__title");
elementName.textContent=this._text;

const popupImage=document.querySelector(".popup-image");
const elementImg= this._element.querySelector(".elements__image");
elementImg.addEventListener("click", ()=>{
 const imgZoom=popupImage.querySelector(".popup-image__zoom");
 imgZoom.src=this._image;
 const popupName=popupImage.querySelector(".popup-image__name");
 popupName.textContent=this._text;
 popupImage.classList.add("popup_opened");
});

const closePopupZoom=popupImage.querySelector(".popup-image__close");
closePopupZoom.addEventListener("click", ()=>{
  popupImage.classList.remove("popup_opened");
});
document.addEventListener("keydown", function (evt) {
 if (evt.key === 'Escape') {
   popupImage.classList.remove('popup_opened');
 }
});
popupImage.addEventListener("click", function(evt){
 if(evt.target.classList.contains("popup_opened")){
   popupImage.classList.remove('popup_opened');
 }
});
}

_setEventListener(){
  this._like();
  this._trash();
  this._zoom();
}
}
