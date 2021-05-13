import logo from './logo.png';
import './App.css';
import { Imc } from './components/Imc';

function App() {
  return (
    <div className="App">
      <img id='logo' src={logo} />
      <p id='title'>Calcular IMC</p>
      <Imc />
    </div>
  );
}

export default App;
