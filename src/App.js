import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Logistic from './components/logistic/LogisticInterface';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import RegisterEvent from './components/RegisterEvent';
import Login from './components/Login.js';
import { ForgotPassword } from './components/ForgotPassword';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/logistica/*' element={<Logistic />} />
          <Route path='/registro-evento/:id' element={<RegisterEvent />} />
          <Route path='/login/*' element={<Login />}  />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
