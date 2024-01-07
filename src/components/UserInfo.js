import { popupDescription, popupName } from "./utils";

export default class UserInfo{
  constructor({nameSelector, aboutSelector}, ){
    this._nameElement = document.querySelector(nameSelector);
    this._aboutElement = document.querySelector(aboutSelector);
  }

  getUserInfo() {
    return{
      name: this._nameElement.textContent,
      about: this._aboutElement.textContent,
    }
  }

  setUserInfo() {
    this._nameElement.textContent=popupName.value;
    this._aboutElement.textContent= popupDescription.value;
  }

}
