import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import AdminRoutes from './routes/AdminRoutes';
import UserRoutes from './routes/UserRoutes';
import UnauthenticatedRoutes from './routes/UnauthenticatedRoutes';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('jwt_token'));
  const role = localStorage.getItem('user_type');

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem('jwt_token'));
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <BrowserRouter>

      <Routes>        
        
        <Route element={<UnauthenticatedRoutes loggedIn={isLoggedIn}/>} >
          
          
        </Route>
        
        <Route element={<AdminRoutes isAdmin={role === 'admin'} />} >
        {/* Routes ngadi para admin gar */}
        </Route>

        <Route element={<UserRoutes loggedIn={isLoggedIn}/>} >
          <Route path="/home" element={<Home />} />
          <Route path='/profile' element={<Profile />}/>      
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          
        </Route>

        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;