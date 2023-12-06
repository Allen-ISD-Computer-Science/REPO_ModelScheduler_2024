import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="text-center">
      <header className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-2xl text-white">
        <img src={logo} className="h-[40vmin] pointer-events-none animate-[spin_20s_infinite_linear]" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="text-cyan-400"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
