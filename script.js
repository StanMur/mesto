//открытие-закрытие модалки
let popup = document.querySelector('.popup');
let buttonOpenPopup = document.querySelector('.profile__edit-btn');
let buttonClosePopup = document.querySelector('.popup__close-btn');

buttonOpenPopup.addEventListener('click', openPopup);
buttonClosePopup.addEventListener('click', closePopup);

function openPopup() {
    popup.classList.toggle('popup_change_display');
};

function closePopup() {
    popup.classList.remove('popup_change_display');
    nameInput.value = ('Жак-Ив Кусто');
    jobInput.value = ('Исследователь океана');
};

//////////////////работа с инпутами//////////////////

let formElement = document.querySelector('.popup__form');
let buttonSave = document.querySelector('.popup__form-btn');

let nameInput = document.querySelector('.popup__form-name');
let jobInput = document.querySelector('.popup__form-job');

let titleChange = document.querySelector('.profile__title');
let subtitleChange = document.querySelector('.profile__subtitle');

buttonSave.addEventListener('click', formSubmit);

function formSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    titleChange.textContent = nameInput.value;
    subtitleChange.textContent = jobInput.value;
    closePopup();
};

formElement.addEventListener('submit', formSubmit);

//////////////////лайки////////////////////
let buttonLike = document.querySelectorAll('.elements__like-btn');

for (let i = 0; i < buttonLike.length; i++) {
    buttonLike[i].addEventListener('click', changeBackground);
};

function changeBackground() {
    this.classList.toggle('elements__like-btn_active');
};