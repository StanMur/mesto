let popup = document.querySelector('.popup_type_edit');
let buttonOpenPopup = document.querySelector('.profile__edit-btn');
let buttonClosePopup = document.querySelector('.popup__close-btn_profile');
let formElement = document.querySelector('.popup__form_profile_change');
let nameInput = formElement.elements.name;
let jobInput = formElement.elements.about;
let titleChange = document.querySelector('.profile__title');
let subtitleChange = document.querySelector('.profile__subtitle');
let popupNewCard = document.querySelector('.popup_type_new-card');
let profileButton = document.querySelector('.profile__button');
let btnCloseCards = document.querySelector('.popup__close-btn_cards');
let sendFoto = document.querySelector('.popup__form-btn-cards');
const popupBigImage = document.querySelector('.popup_type_images'); //модалка
const images = document.querySelectorAll('.elements__items-img'); //картинка
const close = document.querySelector('.popup__close-btn_img');
const closePopupImages = document.querySelector('.popup__close-btn_img'); //крестик

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
  cardSubmit(element.name, element.link);
});

function openPopup() {
  popup.classList.toggle('popup_change_display');
  nameInput.value = titleChange.textContent;
  jobInput.value = subtitleChange.textContent;
};

function closePopup() {
  popup.classList.remove('popup_change_display');
};

function formSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  titleChange.textContent = nameInput.value;
  subtitleChange.textContent = jobInput.value;
  closePopup();
};

function openPopupCards() {
  popupNewCard.classList.toggle('popup_change_display');
};

function closePopupCards() {
  popupNewCard.classList.remove('popup_change_display');
};

function closePopupImg() {
  popupBigImage.classList.remove('popup_change_display');
};

function openPopupImages(imageInput, titleImg) {
  popupBigImage.classList.toggle('popup_change_display');
  const popupContainer = document.querySelector('.popup__modal-img');
  const popupImgTxt = document.querySelector('.popup__modal-txt');
  popupContainer.src = imageInput;
  popupImgTxt.textContent = titleImg;
}

//клоны, лайки, удаление
function cardSubmit(titleImg, imageInput) {
  const addToCard = document.querySelector('.add-to-card'); //темплейт
  const ulPlace = document.querySelector('.elements__items'); //УЛ куда вставляем))
  const initialCardElement = addToCard.content.querySelector('.elements__item').cloneNode(true);
  const imageText = initialCardElement.querySelector('.elements__subtitle');
  const imageClick = initialCardElement.querySelector('.elements__items-img');
  
  imageText.textContent = titleImg;
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

  ulPlace.prepend(initialCardElement);
  closePopupCards();
};

//добавление карточек(инпуты)
sendFoto.addEventListener('click', function () {
  const inputCardsName = document.querySelector('#titleInput');
  const inputCardsLink = document.querySelector('#imageInput');
  cardSubmit(inputCardsName.value, inputCardsLink.value);
  inputCardsName.value = '';
  inputCardsLink.src = '';
});

//обработчики
buttonOpenPopup.addEventListener('click', openPopup);
buttonClosePopup.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmit);
profileButton.addEventListener('click', openPopupCards);
btnCloseCards.addEventListener('click', closePopupCards);
closePopupImages.addEventListener('click', closePopupImg);

