import axios from 'axios';

export const setUserInfo = (userInfo) => ({
  type: 'SET_USER_INFO',
  payload: userInfo,
});

export const setQuestions = (questions) => ({
  type: 'SET_QUESTIONS',
  payload: questions,
});

export const incrementCorrectAnswers = () => ({
  type: 'INCREMENT_CORRECT_ANSWERS',
});

export const nextQuestion = () => ({
  type: 'NEXT_QUESTION',
});

export const previousQuestion = () => ({
  type: 'PREVIOUS_QUESTION',
});

export const resetQuiz = () => ({
  type: 'RESET_QUIZ',
});

export const updateUserAnswer = (questionIndex, answer) => ({
  type: 'UPDATE_USER_ANSWER',
  payload: { questionIndex, answer },
});

export const setQuizCompletion = (isCompleted) => ({
  type: 'SET_QUIZ_COMPLETION',
  payload: isCompleted,
});
export const handleScoreChnage = (payload) => ({
    type: CHANGE_SCORE,
    payload,
  });

export const fetchQuestions = (userInfo) => async (dispatch) => {
  try {
    const response = await axios.get('https://mock-server2-jupl.onrender.com/results', {
      params: {
        amount: userInfo.numQuestions,
        category: userInfo.category,
        difficulty: userInfo.difficulty,
        type: 'multiple',
      },
    });

    const questions = response.data.results.map((result) => {
      return {
        question: result.question,
        options: [...result.incorrect_answers, result.correct_answer],
        correct_answer: result.correct_answer,
      };
    });

    dispatch(setQuestions(questions));
  } catch (error) {
    console.error('Error fetching questions:', error);
  }
};
