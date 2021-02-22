import logo from './logo.svg';
import './App.css';
import { Greeting } from "./components/greeting.js"

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Greeting name="Will" gender="m"></Greeting>
          <Greeting name="Beth" gender="f"></Greeting>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React with Will
          </a>
        </header>
      </div>
      
      <div className="footer">
        &copy; 2021
      </div>
    </>
  );
}

export default App;
