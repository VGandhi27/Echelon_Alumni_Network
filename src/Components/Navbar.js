import React from 'react'
import{ Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/form">Echelon</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link  to="/about" className="nav-link">About</Link>
        </li>
       
      </ul>
      <form className="d-flex" role="search">
     <Link to="/form">   <button className="btn btn-outline-success" type="submit">Login/SignUp</button> </Link>
      </form>
    </div>
  </div>
</nav>
    </>
    
  )
}
