const TMRZ_STATE = 'TMRZ_STATE';

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(TMRZ_STATE, serializedState);
  } catch (err) {
    console.log('Error saving data');
  }
};

const loadState = () => {
  try {
    const serializedState = localStorage.getItem(TMRZ_STATE);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log('Error loading data');
    return undefined;
  }
};

export { saveState, loadState };
