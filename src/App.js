import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Devices from './routes/Devices/Devices';
import BodyLayout from './components/BodyLayout';
import Test from './components/Test';
import Dashboard from './routes/Home/Dashboard';
import DeviceLayout, {loader as deviceLayoutLoader} from './components/DeviceLayout';
import StoreOnce from './routes/Devices/StoreOnce';
import Par3, { action as a3parAction } from './routes/Devices/3Par';
import Hyperv from './routes/Devices/Hyper-v';
import VMWare from './routes/Devices/VMWare';
import MSA from './routes/Devices/MSA';
import Error from './components/Error';
import DataTable from './components/DataTable';
import { loader as par3DataLoader } from './components/DataTable';




function App() {
  
  const router = createBrowserRouter(createRoutesFromElements(
      <Route path = "/" element = {< BodyLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="test" element={<Test />} />
            <Route path="user" element={<Test />} />
  
        <Route path="devices" element={<DeviceLayout />} loader={deviceLayoutLoader}>
          <Route index element={<Devices />} errorElement={<Error/>} />
          <Route path="par3" element={<Par3 title="3PAR" />} action={a3parAction}/>
          <Route path="par3/dataTable" element={<DataTable device="PAR3"/>}/>
          <Route path="storeonce" element={<StoreOnce device="StoreOnce" />} />
          <Route path="storeonce/dataTable" element={<DataTable title="StoreOnce"/>} />
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
