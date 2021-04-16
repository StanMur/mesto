let popup = document.querySelector('.popup');
let buttonOpenPopup = document.querySelector('.profile__edit-btn');
let buttonClosePopup = document.querySelector('.popup__close-btn');
let formElement = document.querySelector('.popup__form');
let buttonSave = document.querySelector('.popup__form-btn');
let nameInput = formElement.elements.name;
let jobInput = formElement.elements.about;
let titleChange = document.querySelector('.profile__title');
let subtitleChange = document.querySelector('.profile__subtitle');


function openPopup() {
    popup.classList.toggle('popup_change_display');
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


buttonOpenPopup.addEventListener('click', openPopup);
buttonClosePopup.addEventListener('click', closePopup);
buttonSave.addEventListener('click', formSubmit);
formElement.addEventListener('submit', formSubmit);