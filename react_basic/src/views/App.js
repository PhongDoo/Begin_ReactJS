import logo from './logo.svg';
import './App.scss';
import ExComponent from './Example/ExComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world React App!!!
        </p>
        <ExComponent/>
      </header>
    </div>
  );
}

export default App;
