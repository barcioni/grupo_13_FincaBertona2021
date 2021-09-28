import logo from './assets/images/logo-finca-1.png';
import './App.css';
import Products from './components/Products';
import Brands from './components/Brands';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="Main-box">
        <Products/>
        <Brands/>
        <Users/>
      </div>
    </div>
  );
}

export default App;
