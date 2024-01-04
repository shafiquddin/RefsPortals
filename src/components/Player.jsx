import { useRef, useState } from "react";

export default function Player() {
  const [submitted,setSubmitted] = useState('')
  const playerName = useRef();

  const clickHandler = () =>{
    setSubmitted(playerName.current.value);
    playerName.current.value = ''
  }

  return (
    <section id="player">
      <h2>Welcome { submitted ? submitted : 'unknown entity'}</h2>
      <p>
        <input type="text" ref={playerName}/>
        <button onClick={clickHandler}>Set Name</button>
      </p>
    </section>
  );
}