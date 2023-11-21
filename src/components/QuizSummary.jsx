
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; 

const QuizSummary = () => {
  const answers = useSelector((state) => state.quiz.answers);

  const correctAnswers = answers.filter((answer) => answer.isCorrect).length;
  const incorrectAnswers = answers.length - correctAnswers;

  return (
    <div>
      <h1>Quiz Summary</h1>
      <p>{`Correct Answers: ${correctAnswers}`}</p>
      <p>{`Incorrect Answers: ${incorrectAnswers}`}</p>
      {/* Link to go back to the quiz */}
      <Link to="/">
        <button>Back to Quiz</button>
      </Link>
    </div>
  );
};

export default QuizSummary;



