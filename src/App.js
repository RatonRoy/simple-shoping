import logo from './logo.svg';
import './App.css';
import Shop from './components/Shop/Shop';
import Props from './components/Props/Props';
import Workreact from './components/Workreact/Workreact';
function App() {
  return (
    <div className='page-container'>
      <Shop></Shop> 
      <Workreact> </Workreact>
      <Props></Props>
    </div>
  );
}

export default App;
