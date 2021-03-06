import { useDispatch } from 'react-redux';
import './Timer.css';
import { toggleTimer } from '../../actions';
import { formatTime } from '../../utils';

function Timer({ timer, index }) {
  const dispatch = useDispatch();

  return (
    <div className="Timer">
      <h2>{timer.name}</h2>
      <h1>{formatTime(timer.time)}</h1>
      <button
        type="button"
        onClick={() => dispatch(toggleTimer(index))}
      >
        {timer.active ? 'Stop' : 'Start'}
      </button>
    </div>
  );
}

export default Timer;
