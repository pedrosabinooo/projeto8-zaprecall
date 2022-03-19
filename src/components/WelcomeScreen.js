import { useState } from "react";

import Logo from "./../assets/images/logo.svg";

function WelcomeScreen() {
  const [go, setGo] = useState(true);
  if (go) {
    return (
      <>
        <img src={Logo} />
        <span>ZapRecall</span>
        <button onClick={() => setGo(!go)}>Iniciar Recall!</button>
      </>
    );
  } else {
    return <></>;
  }
}

export default WelcomeScreen;