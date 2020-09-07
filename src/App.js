import React, { useState, useEffect } from 'react';
import './App.css';

import firebase from './util/firebase';

function App() {

  const [testNumber, setTestNumber] = useState(0);
  const [text, setText] = useState("check");
  const [texts, setTexts] = useState([]);
  const rootRef = firebase.database().ref().child('fireshow');
  const textRef = rootRef.child("text")


  useEffect(() => {
    const numberRef = rootRef.child('number');
    numberRef.on('value', snap => {
      setTestNumber(snap.val())
    });

    textRef.on('value', snap => {
      const textsDict = snap.val();
      const textsList = [];
      Object.keys(textsDict).forEach(id => {
        textsList.push({id: id, val: textsDict[id]})
      })
      setTexts(textsList);

    });

  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {testNumber}
        </p>
        <input type='text' onChange={(e) => setText(e.target.value) }/>
        <p>{text}</p>
        <button onClick={() => textRef.push(text)}>SAVE</button>
        <ul>
          {texts.map(text => <li key={text.id}>{text.val}</li>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
