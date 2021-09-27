import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './NewTimer.css';
import { addTimer } from '../../actions';

function NewTimer() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  return (
    <div className="NewTimer">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addTimer(name));
        }}
      >
        <input
          type="text"
          placeholder="New Timer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default NewTimer;
