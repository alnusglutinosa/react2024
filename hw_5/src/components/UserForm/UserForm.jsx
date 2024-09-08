import React, { useState, useRef, memo } from "react";
import "./style.css";

import service from "../../services/git";

export default memo(function UserForm({ title, setUser, defaultUser }) {
  const [newTitle, setNewTitle] = useState(defaultUser);
  const [isError, setIsError] = useState(false);

  const formRef = useRef(); // {current: <form>} => formRef.current
  const inputTitleRef = useRef();

  const handleNewUserTitle = (event) => {
    setNewTitle((prevState) => (event.target.value));
  };

  const handleNewUserSubmit = async (e) => {
    e.preventDefault();
    const response = await service.get(newTitle);

    if (response) {
      setUser({
        avatar_url: response.avatar_url,
        login: response.login,
        followers: response.followers,
      });
    } else {
      setIsError(true);
    }
  };

  return (
    <form ref={formRef} className="user-form" onSubmit={handleNewUserSubmit}>
      <label>
        {title}{" "}
        <input
          ref={inputTitleRef}
          type="text"
          defaultValue={newTitle}
          onChange={handleNewUserTitle}
        />
      </label>

      { isError ? (<span className="error">Username not exist.</span>) : null }

      <button className="user-form__btn">Submit</button>
    </form>
  );
});