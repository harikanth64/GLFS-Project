import './App.css';
import Sidebar from './components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import Devices from './routes/Devices/Devices';
import BodyLayout from './components/BodyLayout';
import Test from './components/Test';
import Dashboard from './routes/Home/Dashboard';
import DashboardLayout from './components/DashboardLayout';
import Par3 from './routes/Devices/3Par';
import DeviceLayout from './components/DeviceLayout';
import StoreOnce from './routes/Devices/StoreOnce';
import Hyperv from './routes/Devices/Hyper-v';
import VMWare from './routes/Devices/VMWare';


function App() {
  return (
    <div>
      <Routes>
        {/* Use this type of neste Routing if there a shared Layout */}

        {/* Using relative paths */}
        <Route path="/" element={<BodyLayout />}>  
          <Route index element={<Dashboard />} />
          <Route path="test" element={<Test />} />
          <Route path="user" element={<Test />} />
        
          {/* Devices Route */}
          <Route path="devices" element={<DeviceLayout />}>  
            <Route index element={<Devices />} />
            <Route path="3par" element={<Par3 title="3PAR"/>} />
            <Route path="storeonce" element={<StoreOnce />} />
            <Route path="hyper-v" element={<Hyperv />} />
            <Route path="vmware" element={<VMWare />} />
          </Route>
        </Route>


      </Routes>

    </div>
  );
}

export default App;
