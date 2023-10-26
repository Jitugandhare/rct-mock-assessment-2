import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserInfo } from '../Redux/action'

const HomePage = () => {
  const userInfo = useSelector((state) => state.quiz.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    
    dispatch(setUserInfo(userInfo));

   
    navigate('/quiz');
  };

  return (
    <div>
      <h1>Set Up Quiz</h1>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={userInfo.name}
        onChange={(e) => {
          const newName = e.target.value;
          dispatch(setUserInfo({ ...userInfo, name: newName }));
        }}
      />

      <select
        name="category"
        value={userInfo.category}
        onChange={(e) => {
          const newCategory = e.target.value;
          dispatch(setUserInfo({ ...userInfo, category: newCategory }));
        }}
      >
        <option value="gk">General Knowledge</option>
        <option value="sports">Sports</option>
        <option value="Entertainment">Entertainment</option>
      </select>

      <select
        name="difficulty"
        value={userInfo.difficulty}
        onChange={(e) => {
          const newDifficulty = e.target.value;
          dispatch(setUserInfo({ ...userInfo, difficulty: newDifficulty }));
        }}
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <input
        type="number"
        placeholder="Choose number of Questions"
        value={userInfo.numQuestions}
        onChange={(e) => {
          const newNumQuestions = parseInt(e.target.value, 10);
          dispatch(setUserInfo({ ...userInfo, numQuestions: newNumQuestions }));
        }}
      />
      <button onClick={handleStartQuiz}>Start Quiz</button>
    </div>
  );
};

export default HomePage;
