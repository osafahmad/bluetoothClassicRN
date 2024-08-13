import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  answers: {},
  score: 0,
  riskProfile: 'Low',
};

const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    setAnswer: (state : any, action) => {
      const { questionId, score } = action.payload;
      state.answers[questionId] = score;
    },
    calculateScore: (state : any) => {
      state.score = Object.values(state.answers).reduce((total : any, score : any) => total  + score, 0);
      if (state.score <= 7) state.riskProfile = 'Low';
      else if (state.score <= 12) state.riskProfile = 'Medium';
      else state.riskProfile = 'High';
    },clearResults:(state : any)=>{
        state.answers = {};
        state.score = 0;
        state.riskProfile = 'Low'
    }
  },
});

export const { setAnswer, calculateScore , clearResults} = questionnaireSlice.actions;

export default questionnaireSlice.reducer;
