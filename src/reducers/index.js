import { combineReducers } from 'redux';
import timersReducer from './timersReducer';
import selectedTimerReducer from './selectedTimerReducer';

const rootRedcuer = combineReducers({
  timers: timersReducer,
  selectedTimer: selectedTimerReducer,
});

export default rootRedcuer;
