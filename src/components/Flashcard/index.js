import { useState } from "react";

import "./style.css";
import Play from "./play.svg";
import Arrow from "./setinha.png"

export default function Flashcard(props) {
  const { number, question, answer } = props;
  const [stage, setStage] = useState(1);

  if (stage===1) {
    return (
      <>
        <div onClick={() => setStage(2)} className="card-number">
          <span>Ola1{number}</span>
          <img src={Play} alt="Iniciar flashcard" />
        </div>
      </>
    );
  } else if (stage===2) {
    return (
      <>
        <div onClick={() => setStage(3)} className="card-question">
          <span>Ola2{number}</span>
          <img src={Arrow} alt="Virar flashcard" />
        </div>
      </>
    );
  } else if (stage===3) {
    return (
      <>
        <div onClick={() => setStage(4)} className="card-answer">
          <span>Ola3{number}</span>
        </div>
      </>
    );
  } else if (stage===4) {
    return (
      <>
        <div onClick={() => setStage(3)} className="card-result">
          <span>Ola4{number}</span>
        </div>
      </>
    );
  }
}
