import React from 'react';
import logo from './logo.svg';
import { Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Membership } from './components/Pages/Membership';
import { News } from './components/Pages/News';
import { Conatct } from './components/Pages/Conatct';
import { Account } from './components/Pages/Account';
import { Layout } from './components/Layouts/Layout';
import { About } from './components/Pages/About';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/membership' element={<Membership/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/contact' element={<Conatct/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/account' element={<Account/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
