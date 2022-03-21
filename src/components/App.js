import Home from "./Home/";
import Deck from "./Deck/";

import "./../assets/css/reset.css";
import "./../assets/css/style.css";

export default function App() {
  return (
    <div className="container">
      <Home className="Home"/>
      <Deck className="Deck"/>
    </div>
  );
}
