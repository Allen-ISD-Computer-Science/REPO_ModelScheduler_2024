function Home() {
  return (
    <div className="text-center">
      <header className="bg-neutral-800 min-h-screen flex flex-col items-center justify-center text-2xl text-white">
        <img src="logo.svg" className="h-[40vmin] pointer-events-none animate-[spin_20s_infinite_linear]" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="text-cyan-400" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;
