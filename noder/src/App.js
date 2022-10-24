import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Landing from './Pages/Landing';
import Users from './Pages/Users';
import Videos from './Pages/Videos';
import CreateUser from './Support/CreateUser';
import SignUp from './Pages/SignUp';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

  

function App() {
  return (
    <div className="App">
      <Router>
        <div className='nav'>
          <nav>
            <Link to="/" className='headerlink-title'>Landing</Link>
            <Link to="/home" className='headerlink-title'>Home</Link>
            <Link to="/videos" className='headerlink-title'>Videos</Link>
            <Link to="/users" className='headerlink-title'>Users</Link>
          </nav>
        </div>
        <hr />
        <div>
          <Routes>
            <Route exact path='/' element={<Landing />} />
            <Route exact path='/home' element={<Home />} />
            <Route exact path='/videos' element={<Videos />} />
            <Route exact path='/users' element={<Users/>} />
            <Route exact path='/createpost' element={<CreateUser />} />
            <Route exact path='/signup' element={<SignUp/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}



export default App;
