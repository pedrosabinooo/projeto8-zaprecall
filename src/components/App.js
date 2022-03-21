import "./../assets/css/reset.css";
import "./../assets/css/style.css";

import WelcomeScreen from "./WelcomeScreen/WelcomeScreen";
import FlashcardsScreen from "./FlashcardsScreen/FlashcardsScreen";

export default function App() {
  return (
    <div className="container">
      <WelcomeScreen className="home"/>
      <FlashcardsScreen className="flashcards-screen"/>
    </div>
  );
}
