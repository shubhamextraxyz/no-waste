import React, {useState} from 'react'
import LoginRegister from './LoginRegister'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Navbar() {

  const navigate = useNavigate();
  const handleLogo = () =>{
    navigate('/');
  }

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light navbar ">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">No Waste</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={handleLogo}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="#">Problem</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="#">Solution</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Deals
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className='nav-item'><Link className="nav-link" to="/mydeals">My Deals</Link></li>
                <li className='nav-item'><Link className="nav-link" to="/makedeal">Make a Deal</Link></li>
                <li><hr class="dropdown-divider"/></li>
                <li><a class="dropdown-item" href="#">Close</a></li>
              </ul>
           </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Link</a>
            </li>
          </ul>
            <LoginRegister/>
        </div>
      </div>
    </nav>
    </>
  )
}
