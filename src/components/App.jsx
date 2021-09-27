import './App.css';
import NewTimer from './NewTimer';
import TimersList from './TimersList';

function App() {
  return (
    <div className="App">
      <h1>TMRZ</h1>
      <NewTimer />
      <TimersList />
    </div>
  );
}

export default App;
