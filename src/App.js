import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Devices from './routes/Devices/Devices';
import BodyLayout from './components/BodyLayout';
import Test from './components/Test';
import Dashboard from './routes/Home/Dashboard';
import DeviceLayout from './components/DeviceLayout';
import StoreOnce from './routes/Devices/StoreOnce';
import Par3 from './routes/Devices/3Par';
import Hyperv from './routes/Devices/Hyper-v';
import VMWare from './routes/Devices/VMWare';
import MSA from './routes/Devices/MSA';


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
            <Route path="par3" element={<Par3 title="3PAR"/>} />
            <Route path="storeonce" element={<StoreOnce title="StoreOnce"/>} />
            <Route path="hyper-v" element={<Hyperv />} />
            <Route path="vmware" element={<VMWare />} />
            <Route path="msa" element={<MSA />} />
          </Route>
        </Route>


      </Routes>
      

    </div>
  );
}

export default App;
