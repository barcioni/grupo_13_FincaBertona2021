import logo from './assets/images/logo-finca-1.png';
import './App.css';
import Products from './components/Products';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <Products/>
      </div>
    </div>
  );
}

export default App;
