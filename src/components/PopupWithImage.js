import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor(popupSelector, imageElement, nameElement) {
    super(popupSelector);
    this._imageElement = imageElement;
    this._nameElement = nameElement;
  }

  open(link, name) {
    super.open();
    this._imageElement.src = link;
    this._imageElement.alt = name;
    this._nameElement.textContent = name;
  }
}
