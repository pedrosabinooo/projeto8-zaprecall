// import { useState } from "react";

import Flashcard from "../Flashcard";
import Footer from "../Footer";

import "./style.css";
import data from "../../assets/data";
import Logo from "./../../assets/images/logo.svg";

export default function Deck() {
  const flashcards = data.sort(() => Math.random() - 0.5);

  return (
    <>
      <header>
        <img src={Logo} alt="ZapRecall Logo" />
        <span>ZapRecall</span>
      </header>
      <div className="flashcards">
        {flashcards.map((flashcard, index) => {
          const { question, answer } = flashcard;
          return (
            <Flashcard
              key={question + index}
              index={index}
              question={question}
              answer={answer}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}
