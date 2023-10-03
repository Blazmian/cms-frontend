import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Logistic from './components/logistic/LogisticInterface';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import RegisterEvent from './components/RegisterEvent';
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
      <BrowserRouter>
        <Routes>
          <Route path='/logistica/*' element={<Logistic />} />
          <Route path='/registro-evento/:id' element={<RegisterEvent />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
