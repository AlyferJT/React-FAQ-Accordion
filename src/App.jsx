import { useState } from "react";
import QuestionCard from "./components/QuestionCard";

import "./App.css";
import { QUESTIONS } from "./data";
import starImg from "./assets/images/icon-star.svg";

function App() {
  const [selectedAnswer, setSelectedAnswer] = useState();

  function onSelect(selectedQuestion) {
    setSelectedAnswer(selectedQuestion === selectedAnswer ? '' : selectedQuestion)
  }

  return (
    <main className="qaSection">
      <h1>
        <img className="star" src={starImg} />
        FAQs
      </h1>
      <ul className="questionBox">
        {QUESTIONS.map((item, index) => {
          return (
            <QuestionCard
              actualSelected={selectedAnswer}
              onSelect={onSelect}
              key={index}
              id={index}
              {...item}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default App;
