function InfoTooltip({isOpen,
    onClose,
  }){
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
          
            {children}
            
        </div>
      </div>
    );
}

export default InfoTooltip;