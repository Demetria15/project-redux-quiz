// QuizControls.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quiz } from '../reducers/quiz';

const QuizControls = () => {
  const dispatch = useDispatch();
  const currentQuestionIndex = useSelector((state) => state.quiz.currentQuestionIndex);
  const totalQuestions = useSelector((state) => state.quiz.questions.length);

  const handleAnswerSelection = (answerIndex) => {
    dispatch(quiz.actions.submitAnswer({ questionId: currentQuestionIndex, answerIndex }));
  };

  const handleNextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion());
  };

  return (
    <div>
      {currentQuestionIndex < totalQuestions - 1 ? (
        <>
        </>
      ) : (
        <p>No more questions. Check your answers below.</p>
      )}
    </div>
  );
};

export default QuizControls;
