import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import Header from './components/header';
import Home from './components/Home';
import Calculator from './components/calculator';
import Government from './components/government';
import './App.css';

function App() {
  return (
    <main>
      <Header />
      <div className="math-container">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/calculator" element={<Calculator />} exact />
          <Route path="/quotes" element={<Government />} exact />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
