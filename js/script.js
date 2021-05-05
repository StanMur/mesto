const popupEditProfile = document.querySelector('.popup_type_edit');
const openEditProfilePopupBtn = document.querySelector('.profile__edit-btn');
const closeEditProfilePopupBtn = document.querySelector('.popup__close-btn_profile');
const formEditProfile = document.querySelector('.popup__form_profile_change');
const nameInput = formEditProfile.elements.name;
const jobInput = formEditProfile.elements.about;
const userName = document.querySelector('.profile__title');
const userProfession = document.querySelector('.profile__subtitle');
const popupNewCard = document.querySelector('.popup_type_new-card');
const openAddCardPopupBtn = document.querySelector('.profile__open-add-card');
const closeAddCardPopupBtn = document.querySelector('.popup__close-btn_cards');
const addCardBtn = document.querySelector('.popup__form-btn-cards');
const popupBigImage = document.querySelector('.popup_type_images');
const closeImagePopupBtn = document.querySelector('.popup__close-btn_img');
const popupContainer = document.querySelector('.popup__modal-img');
const popupImgTxt = document.querySelector('.popup__modal-txt');
const cardTemplate = document.querySelector('.add-to-card'); 
const inputCardsName = document.querySelector('#titleInput');
const inputCardsLink = document.querySelector('#imageInput');
const formEditCards = document.querySelector('.popup__form_profile_cards');
const ulPlace = document.querySelector('.elements__items'); 

const initialCards = [{
    name: 'Cycling',
    link: 'https://images.unsplash.com/photo-1554201267-006ead010542?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80'
  },
  {
    name: 'Skateboard',
    link: 'https://images.unsplash.com/photo-1554286923-8a066d8ec541?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80'
  },
  {
    name: 'Motorsport',
    link: 'https://images.unsplash.com/photo-1533709957924-e946c7e881c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    name: 'Snowboard',
    link: 'https://images.unsplash.com/photo-1488580923008-6f98dfbd7a25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80'
  },
  {
    name: 'Wingsuit',
    link: 'https://images.unsplash.com/photo-1533652475678-12f52b4fdd53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1267&q=80'
  },
  {
    name: 'Free Fly',
    link: 'https://images.unsplash.com/photo-1474623809196-26c1d33457cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80'
  }

];

initialCards.forEach((element) => {
  createCard(element.name, element.link);
});

function openPopup(popup) { 
  popup.classList.toggle('popup_change_display');
  formEditCards.reset();
};

function closePopup(popup) { 
  popup.classList.remove('popup_change_display');
};

function formEditCardsSubmitHandler(evt) { 
  evt.preventDefault();
  const cardInputs = newCard(titleInput.value, imageInput.value);
  addCard(cardInputs);
  closePopup(popupNewCard);
};

function formEditProfileSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  userName.textContent = nameInput.value;
  userProfession.textContent = jobInput.value;
  closePopup(popupEditProfile); 
};

function openPopupImages(imageInput, titleImg) {
  popupContainer.src = imageInput;
  popupImgTxt.textContent = titleImg;
  openPopup(popupBigImage);
};

//клоны, лайки, удаление
function createCard(titleImg, imageInput) {
  
  const initialCardElement = cardTemplate.content.querySelector('.elements__item').cloneNode(true);
  const imageText = initialCardElement.querySelector('.elements__subtitle');
  const imageClick = initialCardElement.querySelector('.elements__items-img');

  imageText.textContent = titleImg;
  imageClick.alt = titleImg;
  imageClick.src = imageInput;

  imageClick.addEventListener('click', () => {
    openPopupImages(imageClick.src, imageText.textContent);
  });

  initialCardElement.querySelector('.elements__like-btn').addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__like-btn_active');
  });

  initialCardElement.querySelector('.elements__items-basket-btn').addEventListener('click', function (evt) {
    const listItem = initialCardElement.closest('.elements__item');
    listItem.remove();
  });


  return ulPlace.prepend(initialCardElement);
  
};

//добавление карточек(инпуты)

function addCard() {
  createCard(inputCardsName.value, inputCardsLink.value);
  inputCardsName.value = '';
  inputCardsLink.src = '';
  closePopup(popupNewCard);
};

formEditProfile.addEventListener('submit', formEditProfileSubmitHandler);
formEditCards.addEventListener('submit', formEditCardsSubmitHandler);

addCardBtn.addEventListener('click', addCard);

openEditProfilePopupBtn.addEventListener('click', () => {
  openPopup(popupEditProfile);
});
openAddCardPopupBtn.addEventListener('click', () => {
  openPopup(popupNewCard);
});
closeImagePopupBtn.addEventListener('click', () => {
  closePopup(popupBigImage);
});
closeAddCardPopupBtn.addEventListener('click', () => {
  closePopup(popupNewCard);
});
closeEditProfilePopupBtn.addEventListener('click', () => {
  closePopup(popupEditProfile);
});


