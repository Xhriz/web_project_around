import Popup from "./Popup";

export default class PopupWithImage extends Popup{
  constructor(popupSelector, imageElement, nameElement){
    super(popupSelector);
    this._imageElement=imageElement;
    this._nameElement=nameElement;
  }

  open(image, name){
   super.open();
   this._imageElement.src=image;
   this._imageElement.alt=name;
   this._nameElement.textContent=name;
  }
}
