import { useState } from "react";

import "./style.css"
import Logo from "./../../assets/images/logo.svg";

export default function WelcomeScreen() {
  const [go, setGo] = useState(true);
  if (go) {
    return (
      <>
        <img src={Logo} alt="ZapRecall Logo"/>
        <span>ZapRecall</span>
        <button onClick={() => setGo(!go)}>Iniciar Recall!</button>
      </>
    );
  } else {
    return <></>;
  }
}