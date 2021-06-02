export class Card {
    constructor(title, image) {
        this._title = title;
        this._image = image;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector('.add-to-card')
            .content
            .querySelector('.elements__item')
            .cloneNode(true);

        return cardElement;
    }

    _likeCard(evt) {
        evt.target.classList.toggle('elements__like-btn_active');
    }

    _deleteCard() {
        this._element.remove();
    }

    _openBigImage() {
        document.querySelector('.popup__modal-txt').textContent = this._title;
        document.querySelector('.popup__modal-img').alt = this._title;
        document.querySelector('.popup__modal-img').src = this._image;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector('.elements__subtitle').textContent = this._title;
        this._element.querySelector('.elements__items-img').alt = this._title;
        this._element.querySelector('.elements__items-img').src = this._image;
        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.elements__items-img').addEventListener('click', () => {
            this._openBigImage();
        });

        this._element.querySelector('.elements__like-btn').addEventListener('click', (evt) => {
            this._likeCard(evt);
        });

        this._element.querySelector('.elements__items-basket-btn').addEventListener('click', () => {
            this._deleteCard();
        });

    }

}