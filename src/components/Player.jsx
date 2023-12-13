import { useState } from "react";

export default function Player() {
  const [palyerName,setPlayerName] = useState(null);
  const [submitted,setSubmitted] = useState(false)

  const clickHandler = () =>{
    if(palyerName.trim().length > 0){
      setSubmitted(true);
    }
  }

  const changeHandler = (event) =>{
    setSubmitted(false);
    setPlayerName(event.target.value);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? palyerName : 'unknown entity'}</h2>
      <p>
        <input type="text" onChange={changeHandler} value={palyerName}/>
        <button onClick={clickHandler}>Set Name</button>
      </p>
    </section>
  );
}
