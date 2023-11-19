import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from '../reducers/quiz';
import '../index.css';

export const CurrentQuestion = () => {
  const currentQuestionIndex = useSelector((state) => state.quiz.currentQuestionIndex);
  const totalQuestions = useSelector((state) => state.quiz.questions.length);
  const question = useSelector((state) => state.quiz.questions[currentQuestionIndex]);
  const selectedAnswer = useSelector((state) => state.quiz.answers[currentQuestionIndex]?.answerIndex);
  const dispatch = useDispatch();
  const [userClicked, setUserClicked] = useState(false);

  const handleAnswerSelection = (answerIndex) => {
    if (!userClicked) {
      setUserClicked(true);
      dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex }));
    }
  };

  const handleNextQuestion = () => {
    if (userClicked) {
      dispatch(quiz.actions.goToNextQuestion());
      setUserClicked(false);
    }
  };

  const isCorrectAnswer = () => userClicked && selectedAnswer === question.correctAnswerIndex;

  return (
    <div>
      <h1>{`Question ${currentQuestionIndex + 1} / ${totalQuestions}`}</h1>
      <h3>{question.questionText}</h3>
      {question.options.slice(0, 4).map((option, index) => (
        <button
          key={index}
          className={`answer-button ${isCorrectAnswer() ? 'correct' : 'wrong'}`}
          onClick={() => handleAnswerSelection(index)}
          disabled={userClicked}
        >
          {option}
        </button>
      ))}
      {userClicked && (
        <div className={`feedback ${isCorrectAnswer() ? 'correct-feedback' : 'wrong-feedback'}`}>
          {isCorrectAnswer() ? 'Correct!' : 'Wrong!'}
        </div>
      )}
      {currentQuestionIndex < totalQuestions - 1 && (
        <button onClick={handleNextQuestion} disabled={!userClicked}>
          Next
        </button>
      )}
    </div>
  );
};















