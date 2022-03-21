// import { useState } from "react";

import "./style.css";
import Logo from "./../../assets/images/logo.svg";
import Flashcard from "./../Flashcard/Flashcard";
import Footer from "./../Footer/Footer";

export default function FlashcardsScreen() {
  const flashcards = [
    {
      question: "O que é JSX?",
      answer: "Uma extensão de linguagem do JavaScript",
    },
    {
      question: "O React é __",
      answer: "uma biblioteca JavaScript para construção de interfaces",
    },
    {
      question: "Componentes devem iniciar com __",
      answer: "letra maiúscula",
    },
    {
      question: "Podemos colocar __ dentro do JSX",
      answer: "expressões",
    },
    {
      question: "O ReactDOM nos ajuda __",
      answer: "interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      question: "Usamos o npm para __",
      answer: "gerenciar os pacotes necessários e suas dependências",
    },
    {
      question: "Usamos props para __",
      answer: "passar diferentes informações para componentes",
    },
    {
      question: "Usamos estado (state) para __",
      answer:
        "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ];
  flashcards = flashcards.sort(comparador);

  return (
    <>
      <header>
        <img src={Logo} alt="ZapRecall Logo" />
        <span>ZapRecall</span>
      </header>
      <div className="flashcards">
        {flashcards.map((flashcard) => {
          const { question, answer } = flashcard;
          return (
            <Flashcard number={flashcards.indexOf(flashcard)+1} question={question} answer={answer} />
          );
        })}
      </div>
      <Footer />
    </>
  );
}

function comparador() { // Função fornecida para embaralhar array
  return Math.random() - 0.5;
}