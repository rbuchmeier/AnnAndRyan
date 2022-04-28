import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from "./screens/Home";
import Wedding from "./screens/Wedding";
import Lander from "./screens/Lander";
import Chattanooga from "./screens/Chattanooga";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/wedding" element={<Wedding />} />
          <Route exact path="/lander" element={<Lander />} />
          <Route exact path="/chattanooga" element={<Chattanooga />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
