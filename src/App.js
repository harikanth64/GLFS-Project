import './App.css';
import Sidebar from './components/Sidebar';
import { Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import Devices from './routes/Devices/Devices';
import BodyLayout from './components/BodyLayout';
import Test from './components/Test';
import Dashboard from './routes/Home/Dashboard';
import DashboardLayout from './components/DashboardLayout';
import Par3 from './routes/Devices/3Par';


function App() {
  return (
    <div>
      <Routes>
        {/* Use this type of neste Routing if there a shared Layout */}


        <Route element={<BodyLayout />}>  
          <Route path="/" element={<Dashboard />} />
          <Route path="/test" element={<Test />} />
          <Route path="/user" element={<Test />} />
        
          {/* <Route element={<DashboardLayout />} />
          <Route path="/dashboard" element={<Dashboard />} /> */}

        {/* <Route element={<DashboardLayout />}>   */}
          {/* <Route path="/" element={<Dashboard />} /> */}
          <Route path="/devices" element={<Devices />}>
            <Route path="/devices/3par" element={<Par3 />} />
          </Route>
        </Route>


      </Routes>

    </div>
  );
}

export default App;
