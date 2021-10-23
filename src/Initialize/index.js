import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import SignIn from '../views/SignIn';
import Navigation from '../components/Navigation';
import Routes from '../routes';
import { getAllPlayers } from '../api/data/PlayerData';

function Initialize() {
  const [user, setUser] = useState(null);
  const [players, setPlayers] = useState([]);
  const [editItem, setEditItem] = useState({});

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@'[0]),
        };
        setUser(userObj);
        getAllPlayers(userObj.uid).then(setPlayers);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <>
      {user ? (
        <>
          <Navigation user={user} />
          <Routes
            user={user}
            player={editItem}
            setEditItem={setEditItem}
            players={players}
            setPlayers={setPlayers}
          />
        </>
      ) : (
        <SignIn user={user} />
      )}
    </>
  );
}

export default Initialize;
