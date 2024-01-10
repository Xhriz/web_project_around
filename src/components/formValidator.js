export default class FormValidator{
  constructor(config, formElement){
    this._config = config;
    this._formElement = formElement;
    this._inputList= Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    this._buttonElement=formElement.querySelector(this._config.submitButtonSelector);
  }
  _showInputError(inputElement, errorMessage){
    const formError=this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._config.inputErrorClass);
    formError.textContent = errorMessage;
    formError.classList.add(this._config.errorClass);
  }

  _hideInputError(inputElement){
    const formError=this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    formError.classList.remove(this._config.errorClass);
    formError.textContent="";
  }

  _isValid(inputElement){
    if(!inputElement.validity.valid){
     this._showInputError(inputElement, inputElement.validationMessage);
    }else{
     this._hideInputError(inputElement);
    }
   }

   _hasInvalidInput(inputList){
    return inputList.some((inputElement)=>{
      return !inputElement.validity.valid;
  });
  }

_toggleButtonState(){
  if(this._hasInvalidInput(this._inputList)){
    this._buttonElement.classList.add(this._config.inactiveButtonClass);
    this._buttonElement.disabled=true;
  }else{
    this._buttonElement.classList.remove(this._config.inactiveButtonClass);
    this._buttonElement.disabled=false;
  }
}

_setEventListener(){
  this._inputList.forEach((inputElement)=>{
    inputElement.addEventListener("input",()=>{
      this._isValid(inputElement);
      this._toggleButtonState();
    });
  });
}

enableValidation(){
  const formList=Array.from(document.querySelectorAll(this._config.formSelector));
  formList.forEach((item)=>{
    this._formElement.addEventListener("submit", (evt)=>{
    evt.preventDefault();
    });
    this._setEventListener(item);
  });
}
}
