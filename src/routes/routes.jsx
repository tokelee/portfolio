import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from '../Pages/auth/login'
import Dashboard from '../Pages/user/dashboard.user';
import Settings from '../Pages/user/settings.user';

// Authentication Routes

export function Auth() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signin' element={<Login />} />
    </Routes>
    
    </BrowserRouter>
  );
}

// User Route

export function User() {
    return (        
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
      </Routes>
      <Routes>
        <Route path='/settings' element={<Settings />} />
      </Routes>
      </BrowserRouter>
    );
  }
