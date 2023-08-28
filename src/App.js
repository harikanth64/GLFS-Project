import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Devices from './routes/Devices/Devices';
import BodyLayout from './components/BodyLayout';
import Test from './components/Test';
import Dashboard from './routes/Home/Dashboard';
import DeviceLayout, {loader as deviceLayoutLoader} from './components/DeviceLayout';
import StoreOnce from './routes/Devices/StoreOnce';
import Par3, { loader as a3parPageLoader } from './routes/Devices/3Par';
import Hyperv from './routes/Devices/Hyper-v';
import VMWare from './routes/Devices/VMWare';
import MSA from './routes/Devices/MSA';
import Error from './components/Error';




function App() {
  
  const router = createBrowserRouter(createRoutesFromElements(
      <Route path = "/" element = {< BodyLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="test" element={<Test />} />
            <Route path="user" element={<Test />} />
  
        <Route path="devices" element={<DeviceLayout />} loader={deviceLayoutLoader}>
          <Route index element={<Devices />} errorElement={<Error/>} />
          <Route path="par3" element={<Par3 title="3PAR" />} loader={a3parPageLoader} />
          <Route path="storeonce" element={<StoreOnce title="StoreOnce" />} />
          <Route path="hyper-v" element={<Hyperv title="Hyper-V" />} />
          <Route path="vmware" element={<VMWare />} />
          <Route path="msa" element={<MSA />} />
        </Route>
      </Route>
  ))
  return (
    <div>
      <RouterProvider router={ router } />
    </div>
);
}

export default App;
