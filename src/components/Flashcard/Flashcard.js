import { useState } from "react";

import "./style.css";
import Play from "./play.svg";
import Arrow from "./setinha.png"

export default function Flashcard(props) {
  const { number, question, answer } = props;
  const [go, setGo] = useState(true);
  if (go) {
    return (
      <>
        <div className="card-number" onClick={() => setGo(!go)}>
          <span>Ola</span>
          <img src={Play} alt="Iniciar flashcard" />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="card-chosen" onClick={() => setGo(!go)}>
          <span>Ola</span>
          <img src={Arrow} alt="Virar flashcard" />
        </div>
      </>
    );
  }
}
