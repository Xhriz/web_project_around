import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup {
  constructor({ popupSelector, callBack }) {
    super(popupSelector);
    this._callBack = callBack;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._callBack();
      this.close();
    });
  }
}
