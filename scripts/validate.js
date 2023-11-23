const showInputError=(formElement,inputElement, errorMessage)=>{
const formError=formElement.querySelector(`.${inputElement.id}-error`);
inputElement.classList.add("popup__input-error");
formError.textContent = errorMessage;
formError.classList.add("popup__message-error_active");
}

const hideInputError=(formElement, inputElement)=>{
  const formError=formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("popup__input-error");
  formError.classList.remove("popup__message-error_active");
  formError.textContent="";
}

const isValid=(formElement, inputElement)=>{
 if(!inputElement.validity.valid){
  showInputError(formElement,inputElement, inputElement.validationMessage);
 }else{
  hideInputError(formElement,inputElement);
 }
}

const hasInvalidInput=(inputList)=>{
  return inputList.some((inputElement)=>{
    return !inputElement.validity.valid;
});
}

const toggleButtonState=(inputList, buttonElement)=>{
  if(hasInvalidInput(inputList)){
   buttonElement.classList.add("popup__button_desactive");
   buttonElement.disabled=true;
  }else{
   buttonElement.classList.remove("popup__button_desactive");
   buttonElement.disabled=false;
  }
}

const setEventListener=(formElement)=>{
  const inputList= Array.from(formElement.querySelectorAll(".popup__input"));
  const buttonElement=formElement.querySelector(".popup__button");

  inputList.forEach((inputElement)=>{
    inputElement.addEventListener("input",()=>{
      isValid(formElement,inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
}

const enableValidation=()=>{
  const formList=Array.from(document.querySelectorAll(".form"));
  formList.forEach((formElement)=>{
    formElement.addEventListener("submit", (evt)=>{
      evt.preventDefault();
    });
    setEventListener(formElement);
  });
}

enableValidation({
  formSelector: ".form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_desactive",
  inputErrorClass: "popup__input-error",
  errorClass: "popup__message-error_active"
});
