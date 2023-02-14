import { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose, onAddPlace}) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({ name: name, link: link });
    setName('');
    setLink('');
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="add-card"
      textButton="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        className="popup__input popup__input_data_name"
        placeholder="Название"
        required
        minLength="2"
        maxLength="30"
        id="cardName-input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <span className="popup__error cardName-input-error"></span>
      <input
        type="url"
        name="link"
        className="popup__input popup__input_data_link"
        placeholder="Ссылка на картинку"
        required
        id="link-input"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <span className="popup__error link-input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
