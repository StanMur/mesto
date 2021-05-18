const hideInputError = (formElement, inputElement, config) => {
    // hide error
    //find error element
    const {inputErrorClass,errorActiveClass} = config;
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorActiveClass);
    errorElement.textContent = '';
};

const showInputError = (formElement, inputElement, config) => {
    // show error
    const { inputErrorClass, errorActiveClass} = config;
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(errorActiveClass);
};

const checkInputValidity = (formElement, inputElement, config) => {
    //проверяем валидность инпута
    if (inputElement.validity.valid) {
        hideInputError(formElement, inputElement, config);
    } else {
        showInputError(formElement, inputElement, config);
    }
    // если валидный, иначе показываем ошибку
};

const hazInvalidInput = (inputList) => {
    return inputList.some(inputElement => !inputElement.validity.valid);
};

const toggleButtonState = (buttonElement, inputList) => {
    if (hazInvalidInput(inputList)) {
        buttonElement.disabled = true;
    } else {
        buttonElement.disabled = false;
    }
};

const setEventListeners = (formElement, config) => {
    const {
        inputSelector,
        submitButtonSelector,
        ...restConfig
    } = config;
    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
    });

    //найти инпуты
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            // проверить что валидный инпут
            checkInputValidity(formElement, inputElement, restConfig);
            toggleButtonState(buttonElement, inputList);
        });
    });
    //найти сабмиты
    // добавить слушатели for each input
    toggleButtonState(buttonElement, inputList);
};

const enableValidation = (config) => {
    const {
        formSelector,
        ...restConfig
    } = config;
    //найти все формы на странице
    const formList = Array.from(document.querySelectorAll(formSelector));
    //навешать слушатели на инпуты и кнопки 
    formList.forEach((formElement) => {
        setEventListeners(formElement, restConfig);
    });
};