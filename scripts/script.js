let popup=document.querySelector(".popup");
let closePopup=popup.querySelector(".popup__close");
let profile=document.querySelector(".profile");
let editPopup=profile.querySelector(".profile__button-edit");
let profileName=profile.querySelector(".profile__name");
let profileDescription=profile.querySelector(".profile__description");
let popupName=popup.querySelector(".popup__input_name");
let popupDescription=popup.querySelector(".popup__input_description");
let buttonSave=popup.querySelector(".popup__button");

let elements=document.querySelector(".elements");
let buttonLike=elements.querySelectorAll(".elements__like");

function editForm(){
 popup.classList.toggle("popup_opened");
 popupName.value=profileName.textContent;
 popupDescription.value=profileDescription.textContent;
 return;
}

editPopup.addEventListener("click", editForm);
closePopup.addEventListener("click", editForm);

function handleProfileFormSubmit(evt){
  evt.preventDefault();
  profileName.textContent=popupName.value;
  profileDescription.textContent=popupDescription.value;
  popup.classList.toggle("popup_opened");
  return;
}

popup.addEventListener('submit', handleProfileFormSubmit);

function likeActive() {
  this.setAttribute("src", "./images/likeactive.png");
  return;
}

buttonLike.forEach(function(element) {
  element.addEventListener("click", likeActive);
});
