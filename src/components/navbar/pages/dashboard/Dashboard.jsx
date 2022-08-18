import React from 'react'
import Navbar from '../../Navbar';
import { Link } from "react-router-dom";


const Dashboard = () => {
  return (

    <>
      <div className='row'>

        <div className='col-2' >
          <Navbar/>
        </div>
        <div className='col-10'>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to={"/"}>Navbar</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      <Link class="nav-link" to={"/"}>Link</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to={"/"}>Link</Link>
      </li>
      <li class="nav-item dropdown">
      <Link class="nav-link" to={"/"}>Link</Link>
          
        
        <div class="dropdown-menu">
        <Link class="nav-link" to={"/"}>Link</Link>
          
        <Link class="nav-link" to={"/"}>Link</Link>
        <Link class="nav-link" to={"/"}>Link</Link>
        </div>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to={"/"}>Link</Link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
        </div>
      </div>
    
    </>
    
    
  )
}

export default Dashboard;