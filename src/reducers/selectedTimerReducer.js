import { SELECT_TIMER } from '../actions';

const timersReducer = (state = [], action) => {
  switch (action.type) {
    case SELECT_TIMER:
      return action.payload.index;
    default:
      return state;
  }
};

export default timersReducer;
