import { v4 as uuidv4 } from 'uuid';
import { ADD_TIMER, TOGGLE_TIMER, UPDATE_TIME } from '../actions';

class Timer {
  constructor(name) {
    this.id = uuidv4();
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
    case UPDATE_TIME:
      return state.map((timer) => {
        if (timer.active) {
          const newTime = timer.time + action.payload.deltaTime;
          return { ...timer, time: newTime };
        }
        return timer;
      });
    default:
      return state;
  }
};

export default timersReducer;
