function ImagePopup({card, onClose}) {
    return(<div className={`popup popup_type_preview ${card._id && 'popup_opened'}`}>
    <div className="popup__container popup__container_type_preview">
      <figure className="popup__margin">
        <img className="popup__img" src={card.link} alt={card.name} />
        <figcaption className="popup__caption">{card.name}</figcaption>
      </figure>
      <button
        className="popup__close"
        type="button"
        aria-label="закрыть окно"
        onClick={onClose}
      ></button>
    </div>
  </div>)
}

export default ImagePopup;