import './App.css';
import Sidebar from './components/Sidebar';
import { Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import Devices from './routes/Devices';
import BodyLayout from './components/BodyLayout';


function App() {
  return (
    <div>
      <Routes>
        {/* Use this type of neste Routing if there a shared Layout */}
        <Route path="/" element={<BodyLayout />}>  
          <Route index element={<Home />} />
          <Route path="devices" element={<Devices />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
