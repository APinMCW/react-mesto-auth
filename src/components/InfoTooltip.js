function InfoTooltip({isOpen,
    onClose,
    title,
    icon
  }){
    return (
      <div className={`popup popup_type_notice ${isOpen && "popup_opened"}`}>
        <div className={`popup__container popup__container_type_notice`}>
          <img className="popup_logo" src={icon}></img>
          <h2 className="popup__title">{title}</h2>
          <button
            className="popup__close"
            type="button"
            aria-label="закрыть окно"
            onClick={onClose}
          ></button>       
        </div>
      </div>
    );
}

export default InfoTooltip;