import { ADD_TIMER, TOGGLE_TIMER } from '../actions';

class Timer {
  constructor(name) {
    this.name = name;
    this.time = 0;
    this.active = false;
  }
}

const timersReducer = (state = [], action) => {
  const name = (
    action.payload.name.trim() ? action.payload.name : `Timer ${state.lenth}`
  );

  switch (action.type) {
    case ADD_TIMER:
      return [...state, new Timer(name)];
    case TOGGLE_TIMER:
      return state.map((timer, index) => {
        if (index === action.payload.index) return { ...timer, active: !timer.active };
        return timer;
      });
    default:
      return state;
  }
};

export default timersReducer;
