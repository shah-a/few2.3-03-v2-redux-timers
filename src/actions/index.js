const ADD_TIMER = 'ADD_TIMER';
const SELECT_TIMER = 'SELECT_TIMER';
const TOGGLE_TIMER = 'TOGGLE_TIMER';

const addTimer = (name) => ({
  type: ADD_TIMER,
  payload: { name },
});

const toggleTimer = (index) => ({
  type: TOGGLE_TIMER,
  payload: { index },
});

const selectTimer = (index) => ({
  type: SELECT_TIMER,
  payload: { index },
});

export {
  ADD_TIMER, TOGGLE_TIMER, SELECT_TIMER,
  addTimer, toggleTimer, selectTimer,
};
