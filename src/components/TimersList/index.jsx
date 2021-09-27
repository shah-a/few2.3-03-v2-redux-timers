import { useSelector } from 'react-redux';
// import { selectTimer } from '../../actions';
import Timer from '../Timer';

function TimersList() {
  const timers = useSelector((state) => state.timers);

  return (
    <div className="TimersList">
      {timers.map((timer, index) => (
        <Timer
          key={timer.id}
          timer={timer}
          index={index}
        />
      ))}
    </div>
  );
}

export default TimersList;
