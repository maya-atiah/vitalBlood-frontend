import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navhead from './Components/Navhead/Navhead';

function App() {
  return (
    <div className="App">
      <Navhead/>
      
      

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/donate' element={<Home />} />
        <Route path='/requests' element={<Home />} />
        <Route path='/feed' element={<Home />} />
        <Route path='/volunteers' element={<Home />} />
        <Route path='/about' element={<Home />} />
      
        </Routes>
    </div>
  );
}

export default App;
