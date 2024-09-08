import React, { memo } from "react";
import "./style.css";

export default memo(function UserView({ user, setUser, isVisibleReset }) {

  const handleReset = async (e) => {
    setUser(null);
  }

  return (
    <div className="user-view">
    
    <div className="user-view__img-wrap">
        <img className="user-view__img" src={user?.avatar_url} alt="userimg" />
    </div>

    <div className="user-view__name">{user?.login}</div>
        
    { isVisibleReset ? (
      <button className="user-view__btn" onClick={handleReset}>reset</button>
    ) : null }

    { user?.totalScore ? (
      <>
        <div className="user-view__followers">Followers={user?.followers}</div>
        <div className="user-view__stargazers-count">Stars={user?.stargazersCount}</div>
        <div className="user-view__total-score">Total Score={user?.totalScore}</div>
      </>
    ) : null }
    </div>
  );
});