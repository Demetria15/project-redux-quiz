import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';  
import { quiz } from '../reducers/quiz';

const QuizControls = () => {
  const quizOver = useSelector((state) => state.quiz.quizOver);
  const dispatch = useDispatch();
  const navigate = useNavigate();  

  const handleRestart = () => {
    dispatch(quiz.actions.restart());
    navigate('/');
  };

  const handleSummary = () => {
    navigate('/summary');
  };

  return (
    <div>
      {quizOver && (
        <div>
          <button onClick={handleRestart}>Restart Quiz</button>
          <button onClick={handleSummary}>Quiz Summary</button>
        </div>
      )}
    </div>
  );
};

export default QuizControls;


