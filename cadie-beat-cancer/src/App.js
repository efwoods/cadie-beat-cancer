import logo from './logo.svg';
import './App.css';
import ribbon from  './breast-cancer-ribbon.gif'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={ribbon} className="App-logo" alt="logo" />
        <p className="text-3xl font-bold underline">
         Congratulations!
         
        </p>
        <p className='text-3xl font-bold underline'>
        You made it through the surgery!
        
        </p>
        <p className='text-3xl font-bold underline'>
        Get Well Soon Cadie!
        </p>

        <div style={{ width: '50%' }}>

    </div>
      </header>
    </div>
  );
}

export default App;
