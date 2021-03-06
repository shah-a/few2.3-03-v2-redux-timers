import { combineReducers } from 'redux';
import timersReducer from './timersReducer';
import selectedTimerReducer from './selectedTimerReducer';

const rootReducer = combineReducers({
  timers: timersReducer,
  selectedTimer: selectedTimerReducer,
});

export default rootReducer;
