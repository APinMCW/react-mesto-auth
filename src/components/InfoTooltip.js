function InfoTooltip({isOpen,
    onClose,
    data
  }){
    return (
      <div className={`popup popup_type_notice ${isOpen && "popup_opened"}`}>
        <div className={`popup__container popup__container_type_notice`}>
          <img className="popup_logo" src={data.icon}></img>
          <h2 className="popup__title popup__title_type_notice">{data.title}</h2>
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