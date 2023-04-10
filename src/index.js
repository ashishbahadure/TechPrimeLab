import React from 'react';
import  ReactDOM  from 'react-dom';
import Log from './Log.jsx';
import Home from './Home.jsx';
import Dash from './Dash.jsx';
import Create_project from './Create_project.jsx';
import Project_listing from './Project_listing.jsx';
// import Nav from './Nav.jsx';
// import Signup from './Signup.jsx';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
ReactDOM.render(
  <>
<Router>
{/* <Nav></Nav> */}
  <Routes>
    <Route path="/home" element={<Home></Home>}></Route>
    <Route path="/" element={<Log></Log>}></Route>
    <Route path='/Dash' element={<Dash></Dash>}></Route>
    <Route path='/create_project' element={<Create_project></Create_project>}></Route>
    <Route path='/project_listing' element={<Project_listing></Project_listing>}></Route>

    {/* <Route path="/Signup" element={<Signup></Signup>}></Route> */}
  </Routes>
</Router>
  </>,document.getElementById('root')
);  