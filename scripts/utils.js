const profile=document.querySelector(".profile");
const popup=document.querySelector(".popup");
const editPopup=profile.querySelector(".profile__button-edit");
const profileName=profile.querySelector(".profile__name");
const profileDescription=profile.querySelector(".profile__description");
const popupName=popup.querySelector(".popup__input_name");
const popupDescription=popup.querySelector(".popup__input_description");
const buttonSave=popup.querySelector(".popup__button");
const buttonAdd=profile.querySelector(".profile__button-add");
const popupAdd=document.querySelector(".popup-add");
const closePopupAdd=popupAdd.querySelector(".popup-add__close");
const closePopup=popup.querySelector(".popup__close");

function editForm(){
  popup.classList.toggle("popup_opened");
  popupName.value=profileName.textContent;
  popupDescription.value=profileDescription.textContent;
  return;
 }

 editPopup.addEventListener("click", editForm);
 closePopup.addEventListener("click", editForm);
 document.addEventListener("keydown", function (evt) {
   if (evt.key === 'Escape') {
     popup.classList.remove('popup_opened');
   }
 });
 popup.addEventListener("click", function(evt){
   if(evt.target.classList.contains("popup_opened")){
     popup.classList.remove('popup_opened');
   }
 });


 const inputTitle= popupAdd.querySelector(".popup-add__input-title");
const inputImage = popupAdd.querySelector(".popup-add__input-link");

function togglePopupImage(){
  popupAdd.classList.toggle("popup_opened");
  inputTitle.value = "";
  inputImage.value = "";
  const buttonElement=popupAdd.querySelector(".popup__button");
  buttonElement.classList.add("popup__button_inactive");
  buttonElement.disabled=true;
}

buttonAdd.addEventListener("click",  togglePopupImage);
closePopupAdd.addEventListener("click",  togglePopupImage);
document.addEventListener("keydown", function (evt) {
  if (evt.key === 'Escape') {
    popupAdd.classList.remove('popup_opened');
  }
});
popupAdd.addEventListener("click", function(evt){
  if(evt.target.classList.contains("popup_opened")){
    popupAdd.classList.remove('popup_opened');
  }
});
