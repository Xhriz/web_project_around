const popup=document.querySelector(".popup");
const closePopup=popup.querySelector(".popup__close");
const profile=document.querySelector(".profile");
const editPopup=profile.querySelector(".profile__button-edit");
const profileName=profile.querySelector(".profile__name");
const profileDescription=profile.querySelector(".profile__description");
const popupName=popup.querySelector(".popup__input_name");
const popupDescription=popup.querySelector(".popup__input_description");
const buttonSave=popup.querySelector(".popup__button");

const elements=document.querySelector(".elements");
const buttonLike=elements.querySelectorAll(".elements__like");

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
