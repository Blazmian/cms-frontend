import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Logistic from './components/logistic/LogisticInterface';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/logistica' element={<Logistic />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;
