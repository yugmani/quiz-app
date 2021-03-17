import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [showPlayButton, setShowPlayButton] = useState(true);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      const newScore = score + 5;
      setScore(newScore);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleNextButton = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setShowScore(false);
  };

  const handleExitButton = () => {
    setShowPlayButton(false);
  };

  return (
    <div className="app">
      {/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
      {showScore ? (
        <div>
          <div className="score-section">
            You scored {score} out of {questions.length}
          </div>
          {showPlayButton ? (
            <div className="button-section">
              <button onClick={handleNextButton}>Play Again</button>
              <button onClick={handleExitButton}>Exit</button>
            </div>
          ) : (
            <>
              <h1>
                Thank you
                <span> ❤️</span> !
              </h1>
            </>
          )}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1} </span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((item) => (
              <button onClick={() => handleAnswerButtonClick(item.isCorrect)}>
                {item.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
