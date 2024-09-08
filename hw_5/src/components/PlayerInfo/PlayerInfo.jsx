// PlayerInfo


import React, { useState } from "react";
import "./style.css";

import UserForm from "./../UserForm/UserForm";
import UserView from "./../UserView/UserView";

export default function PlayerInfo({ user, setUser, isVisibleReset, defaultUser, title }) {
  return (
    <div className="player-info">
      {user ? (
        <UserView user={user} setUser={setUser} isVisibleReset={isVisibleReset}/>
      ) :
      
      <UserForm title={title} setUser={setUser} defaultUser={defaultUser}/>
      }
    </div>
  );
}