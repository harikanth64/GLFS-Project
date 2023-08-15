import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import Devices from './routes/Devices';


function App() {
  return (
    <div>
      <Router>
        <Sidebar>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/devices" element={<Devices/>} />
          </Routes>
        </Sidebar>
      </Router>

    </div>
  );
}

export default App;
