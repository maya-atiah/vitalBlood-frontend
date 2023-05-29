import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navhead from './Components/Navhead/Navhead';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Request from './Components/Request/Request';
import secureLocalStorage from 'react-secure-storage';
import UserProfile from './Components/UserProfile/UserProfile';
import Volunteers from './Components/Volunteers/Volunteers';
import Donate from './Components/Donate/Donate';
import Feed from './Components/Feed/Feed';
import Page404 from './Components/Page404/Page404';
import Signup from './Components/Login/Signup';
import Scroll from './Components/Scroll/Scroll';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    changeLoggedIn();
  }, []);

  const changeLoggedIn = () => {
    let loggedin = secureLocalStorage.getItem('loggedIn');
    if (loggedin) setIsLoggedIn(true);
    else setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <Navhead isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route
          path="/login"
          element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path='userProfile' element={isLoggedIn === true ? <UserProfile /> : <Login />} />

        <Route path="/donate" element={<Donate />} />
        <Route path='/*' element={<Page404 />} />
        <Route path="/request" element={<Request />} />
        <Route path='/register' element={<Signup />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/volunteers" element={<Volunteers />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="/userProfile" element={<UserProfile />} /> */}
      </Routes>
      <Scroll />
      <Footer />
    </div>
  );
}

export default App;
