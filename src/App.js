import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navhead from './Components/Navhead/Navhead';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Request from './Components/Request/Request';

function App() {
  return (
    <div className="App">
      <Navhead/>
      
      

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/donate' element={<Home />} />
        <Route path='/request' element={<Request />} />
        <Route path='/feed' element={<Home />} />
        <Route path='/volunteers' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
