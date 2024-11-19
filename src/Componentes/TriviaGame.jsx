import React, { useState } from "react";
import "../styles/TriviaGame.css";

const questions = [
  {
    question: "¿Cuál es la capital de Francia?",
    options: ["Berlin", "Madrid", "Paris", "Lisboa"],
    answer: "Paris",
  },
  {
    question: "¿En qué año se dió la independencia de Colombia?",
    options: ["1812", "1821", "1810", "1807"],
    answer: "1810",
  },
  {
    question: "¿Cuál es el planeta más grande del sistema solar?",
    options: ["Tierra", "Marte", "Júpiter", "Venus"],
    answer: "Júpiter",
  },
];

const TriviaGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setShowAnswer(true);
  };

  const handleNextQuestion = () => {
    setSelectedOption("");
    setShowAnswer(false);
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="trivia-game">
      <h1>🎉Juego de trivia 🎉</h1>
      {currentQuestion < questions.length ? (
        <div>
          <h2>
            Pregunta {currentQuestion + 1}:{" "}
            {questions[currentQuestion].question}
          </h2>
          <div className="options">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                className={`option ${
                  showAnswer && option === questions[currentQuestion].answer
                    ? "correct"
                    : selectedOption === option
                    ? "selected"
                    : ""
                }`}
                onClick={() => handleOptionSelect(option)}
                disabled={showAnswer}
              >
                {option}
              </button>
            ))}
          </div>
          {showAnswer ? (
            <div>
              {selectedOption === questions[currentQuestion].answer ? (
                <p className="feedback correct">🎉 ¡Correcto!</p>
              ) : (
                <p className="feedback incorrect">
                  ❌ Incorrecto, la respuesta es:{" "}
                  {questions[currentQuestion].answer}
                </p>
              )}
              <button onClick={handleNextQuestion}>
                {currentQuestion + 1 < questions.length
                  ? "Siguiente pregunta"
                  : "Finalizar"}
              </button>
            </div>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!selectedOption}
              className="submit"
            >
              Probar
            </button>
          )}
        </div>
      ) : (
        <div className="score">
          <h2>Terminaste!</h2>
          <p>
            Tu puntajes fue: {score} / {questions.length}
          </p>
          <button onClick={() => window.location.reload()}>
            Intenta de nuevo
          </button>
        </div>
      )}
    </div>
  );
};

export default TriviaGame;
