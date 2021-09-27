import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
// import { selectTimer } from '../../actions';
import Timer from '../Timer';

function TimersList() {
  const timers = useSelector((state) => state.timers);

  return (
    <div className="TimersList">
      {timers.map((timer, index) => (
        <Timer
          key={uuidv4()}
          timer={timer}
          index={index}
        />
      ))}
    </div>
  );
}

export default TimersList;
