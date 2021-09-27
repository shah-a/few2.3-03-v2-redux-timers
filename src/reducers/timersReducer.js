import { ADD_TIMER, TOGGLE_TIMER } from '../actions';

class Timer {
  constructor(name) {
    this.name = name;
    this.time = 0;
    this.active = false;
  }
}

const timersReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TIMER: {
      const name = action.payload.name.trim() ? action.payload.name : `Timer ${state.length + 1}`;
      return [...state, new Timer(name)];
    }
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
