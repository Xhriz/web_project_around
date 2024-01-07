import Popup from "./Popup";

export default class PopupWithForm extends Popup{
  constructor({popupSelector, callBack}){
    super(popupSelector);
    this._callback = callBack;
    this._formElement =  this._popup.querySelector(".form");
  }

  _getInputValues(){
    const inputs = this._formElement.querySelectorAll(".popup__input");
    const values = {};

   inputs.forEach((input) => {
     values[input.name] = input.value;
    });

    return values;
  }

  _setInputValues(values) {
    const inputs = this._formElement.querySelectorAll(".popup__input");
    inputs.forEach((input) => {
      input.value = values[input.name];
    });
  }

  setEventListeners(){
    super.setEventListeners();

    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._callback(this._getInputValues());
      this.close();

    });
  }

  close(){
    super.close();
    this._formElement.reset();
  }
}
