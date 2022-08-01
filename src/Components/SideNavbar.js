import React from 'react'
import './Elements.css';
import { Link } from 'react-router-dom';

export default function SideNavbar() {
  return (
    <>
    <div className="contain pt-2 ">
        <div className="row">
        <nav className="navbar navbar-dark bg-dark ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Features</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Features</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <Link to="/careerCenter" className="nav-link active" aria-current="page" >Career Center</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/membershipCard">MemberShip Card</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/updateProfile">Update Profile</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/notification">Notification</Link>
          </li>
                   <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/createGroups">Create Groups </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/Members">Members </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/message">Messages </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/meetUps">Meet Ups </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/more">More</Link>
          </li>
        
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Post
            </Link>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><Link className="dropdown-item" to="/postJob">Job</Link></li>
              <li><Link className="dropdown-item" to="/postDiscussion">Discussion</Link></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <li><Link className="dropdown-item" to="/postInternship">Internship</Link></li>
            </ul>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2 form-label" htmlfor="exampleDataList" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-success" type="submit">Search</button>
          
        </form>
      </div>
    </div>
  </div>
</nav>
      
        </div>
      
    </div>
    </>
    )
}
