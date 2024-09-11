import React, { useState, useEffect } from "react";
import "./style.css";
import service from "../../services/git";
import PlayerInfo from "./../PlayerInfo/PlayerInfo";


export default function Rumble() {
  const [user1, setUser1] = useState();
  const [user2, setUser2] = useState();
  const [isStartBattle, setIsStartBattle] = useState(false);
  const [isWinner1, setIsWinner1] = useState(null);

  const handleBattle = async (e) => {
    setIsStartBattle(true);
    addUserScore(user1, setUser1);
    addUserScore(user2, setUser2);
  }

  const handleRestart = async (e) => {
    setIsStartBattle(false);
    setUser1(null);
    setUser2(null);
    setIsWinner1(null);
  }

  const addUserScore = async (userParam, setUser) => {
    const response = await service.getBattle(userParam.login);

    let totalScore = response.reduce((acc, currentObj) => {
      return acc + currentObj.stargazers_count;
    }, 0);

    setUser({
      ...userParam,
      stargazersCount: totalScore,
      totalScore: user1.followers + totalScore,
      isLoadedScore: true
    });
  }

  useEffect(() => {
    if (user1 && user2) {
      setIsWinner1(user1.totalScore > user2.totalScore);
    } else {
      setIsWinner1(null);
    }
    
  }, [user1, user2]);

  return (
    <div className="rumble">
      <div className="rumble__players">
       {isStartBattle && user1?.isLoadedScore && user2?.isLoadedScore ? (<div>{isWinner1 ? `Winner` : `Loser`}</div>) : null}
        <PlayerInfo user={user1} setUser={setUser1} isWinner={isWinner1}  isVisibleReset={!isStartBattle} defaultUser="davglass" title="1 User name:"/>
        
        {isStartBattle && user1?.isLoadedScore && user2?.isLoadedScore ? (<div>{!isWinner1 ? `Winner` : `Loser`}</div>) : null}
        <PlayerInfo user={user2} setUser={setUser2} isWinner={!isWinner1} isVisibleReset={!isStartBattle} defaultUser="jaredhanson" title="2 User name:"/>
      </div>

      {user1 && user2 && !isStartBattle ? (
        <button className="rumble__btn" onClick={handleBattle}>Battle</button>
      ) : null}

      {user1 && user2 && isStartBattle ? (
        <button className="rumble__btn" onClick={handleRestart}>Restart</button>
      ) : null}

    </div>
  );
}