const initialState = {
  user: {
    name: '',
    category: '',
    difficulty: '',
    numQuestions: 0,
  },
  questions: [],
  currentQuestionIndex: 0,
  correctAnswers: 0,
  quizCompleted: false, 
  userAnswers: [], 
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_INFO':
      return {
        ...state,
        user: {
          ...action.payload,
        },
      };

    case 'SET_QUESTIONS':
      return {
        ...state,
        questions: action.payload,
      };

    case 'INCREMENT_CORRECT_ANSWERS':
      return {
        ...state,
        correctAnswers: state.correctAnswers + 1,
      };

    case 'NEXT_QUESTION':
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
      };

    case 'PREVIOUS_QUESTION':
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex - 1,
      };

    case 'RESET_QUIZ':
      return initialState;

    case 'UPDATE_USER_ANSWER':
      const { questionIndex, answer } = action.payload;
      const updatedUserAnswers = [...state.userAnswers];
      updatedUserAnswers[questionIndex] = answer;
      return {
        ...state,
        userAnswers: updatedUserAnswers,
      };

    case 'SET_QUIZ_COMPLETION':
      return {
        ...state,
        quizCompleted: action.payload,
      };

    default:
      return state;
  }
};

export default quizReducer;
