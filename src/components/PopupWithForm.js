function PopupWithForm({
  title,
  name,
  textButton,
  children,
  isOpen,
  onClose,
  onSubmit,
}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen && "popup_opened"}`}>
      <div className={`popup__container popup__container_type_${name}`}>
        <h2 className="popup__title">{title}</h2>
        <button
          className="popup__close"
          type="button"
          aria-label="закрыть окно"
          onClick={onClose}
        ></button>
        <form
          name={name}
          className="popup__form"
          noValidate
          onSubmit={onSubmit}
        >
          {children}
          <button
            className="popup__button"
            type="submit"
            aria-label={textButton}
          >
            {textButton}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
