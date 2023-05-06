import './App.css';
import Calculator from './components/calculator';
import Government from './components/government';

function App() {
  return (
    <div>
      <div className="design">
        <Calculator />
      </div>
      <div className="desc-message">
        <Government />
      </div>
    </div>
  );
}

export default App;
