import storm from './storm.jpg';
import butte from './Butte.jpg';
import './App.css';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="App-body">
        <img style={{width:"100%", marginTop:"20px"}} src={butte} alt="Butte" />
      </div>
    </div>
  );
}

export default App;
