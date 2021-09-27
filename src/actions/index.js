const ADD_TIMER = 'ADD_TIMER';
const SELECT_TIMER = 'SELECT_TIMER';
const TOGGLE_TIMER = 'TOGGLE_TIMER';
const UPDATE = 'UPDATE';

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

const update = (deltaTime) => ({
  type: UPDATE,
  payload: { deltaTime },
});

export {
  ADD_TIMER, TOGGLE_TIMER, SELECT_TIMER, UPDATE,
  addTimer, toggleTimer, selectTimer, update,
};
