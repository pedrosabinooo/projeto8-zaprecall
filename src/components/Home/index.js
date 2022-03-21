import { useState } from "react";

import "./style.css";
import Logo from "./../../assets/images/logo.svg";

export default function Home() {
  const [visible, setVisible] = useState(true);
  if (visible) {
    return (
      <>
        <img src={Logo} alt="ZapRecall Logo" />
        <span>ZapRecall</span>
        <button onClick={() => setVisible(!visible)}>Iniciar Recall!</button>
      </>
    );
  }

  return <></>;
}
