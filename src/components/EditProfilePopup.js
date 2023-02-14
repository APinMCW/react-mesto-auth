import React, { useState, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const currentUser = React.useContext(CurrentUserContext);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({ name: name, about: description });
  }

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profile"
      textButton="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        className="popup__input popup__input_data_name"
        placeholder="Имя"
        required
        minLength="2"
        maxLength="40"
        id="name-input"
        onChange={handleChangeName}
        value={name || ''}
      />
      <span className="popup__error name-input-error"></span>
      <input
        type="text"
        name="about"
        className="popup__input popup__input_data_job"
        placeholder="О себе"
        required
        minLength="2"
        maxLength="200"
        id="job-input"
        onChange={handleChangeDescription}
        value={description || ''}
      />
      <span className="popup__error job-input-error"></span>
    </PopupWithForm>
  );
}
export default EditProfilePopup;
