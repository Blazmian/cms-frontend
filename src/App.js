import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Logistic from './components/logistic/LogisticInterface';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import "./styles/General.css";
import RegisterEvent from './components/RegisterEvent';
import { Toaster } from 'react-hot-toast'
import Login from './components/Login.js';
import QRegisterEvent from './components/QRegisterEvent';
import Prueba from './Prueba';

const App = () => {
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <BrowserRouter>
        <Routes>
          <Route path='/logistica/*' element={<Logistic />} />
          <Route path='/registro-evento/:id' element={<RegisterEvent />} />
          <Route path='/login/*' element={<Login />} />
          <Route path='/qr/*' element={<QRegisterEvent />} />

          <Route path='' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
