const popup=document.querySelector(".popup");
const closePopup=popup.querySelector(".popup__close");
const profile=document.querySelector(".profile");
const editPopup=profile.querySelector(".profile__button-edit");
const profileName=profile.querySelector(".profile__name");
const profileDescription=profile.querySelector(".profile__description");
const popupName=popup.querySelector(".popup__input_name");
const popupDescription=popup.querySelector(".popup__input_description");
const buttonSave=popup.querySelector(".popup__button");
const buttonAdd=profile.querySelector(".profile__button-add");
const popupAdd=document.querySelector(".popup-add");
const closePopupAdd=popupAdd.querySelector(".popup-add__close");

const elements=document.querySelector(".elements");
const popupImage=document.querySelector(".popup-image");

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

function addCard(card){
  const templateCard=document.querySelector("#template-card");

  const cardElement=templateCard.content.cloneNode(true);

  const elementImg= cardElement.querySelector(".elements__image");
  elementImg.src=card.link;
  elementImg.alt=card.name;

  const elementName=cardElement.querySelector(".elements__title");
   elementName.textContent=card.name;

  elementImg.addEventListener("click", ()=>{
    const imgZoom=popupImage.querySelector(".popup__img-zoom");
    imgZoom.src=card.link;
    const popupName=popupImage.querySelector(".popup__name");
    popupName.textContent=card.name;
    popupImage.classList.add("popup_opened");
  });

  const closePopupZoom=popupImage.querySelector(".popup__close-zoom");
  closePopupZoom.addEventListener("click", ()=>{
     popupImage.classList.remove("popup_opened");
  });

const elementTrash =cardElement.querySelector(".elements__trash");
elementTrash.addEventListener("click", ()=>{
  const removeElement = elementTrash.closest(".elements__card");
  removeElement.remove();
});

const elementList=elements.querySelector(".elements__list");
  elementList.prepend(cardElement);

const likeButton = document.querySelector(".elements__button-like");
likeButton.addEventListener("click", () => {
  likeButton.classList.toggle("elements__button-like_click");
});
}



const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
  }
];

initialCards.forEach(addCard);

const inputTitle= popupAdd.querySelector(".popup-add__input_title");
const inputImage = popupAdd.querySelector(".popup-add__input_link");

function addImage(){
  popupAdd.classList.toggle("popup_opened");
  inputTitle.value = "";
  inputImage.value = "";
}
buttonAdd.addEventListener("click", addImage);
closePopupAdd.addEventListener("click", addImage);


function handleCardFormSubmit(evt) {
  evt.preventDefault();

  const card = {
    name: inputTitle.value,
    link: inputImage.value,
  };
  addCard(card);
  popupAdd.classList.remove("popup_opened");

}

popupAdd.addEventListener("submit", handleCardFormSubmit);
