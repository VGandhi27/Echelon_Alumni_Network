import React from 'react'
import slide1 from './images/slide1.jfif'
import './Elements.css';

export default function UpdateProfile() {
  return (
    <>
   <div className="containers">
<div className="container">
    <div className="row">
        <div className="col-sm-12">
            <h1>
                My Profile
            </h1>
            </div>
            </div>
         {/*--------Profile Card---------*/}
      <div className="row">
        <div className="col-sm-4">
          <img src={slide1} alt="" />
        </div>
        <div className="col-sm-8">
          <h2>Name: Vidushi Gandhi</h2>
          <div className="col-sm-6">
          <h5>Add Status</h5>
          {/*-------Button - Modal-------*/}
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
Add Work
</button>

{/*-------Modal-------*/}
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Add Work</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        
      <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">@</span>
  <input type="text" className="form-control" placeholder="Company Name" aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Job Title" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
</div>

<label for="basic-url" className="form-label">Your Company URL</label>
<div className="input-group mb-3">
  <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
</div>

<div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="From (MM-YYYY)" aria-label="basic-addon3"/>
</div>

<div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="To (MM-YYYY)" aria-label="Username"/>
  <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
  <label className="form-check-label" for="flexCheckDefault">
    Currently working
  </label>
</div>
</div>

<div className="input-group">
  <span className="input-group-text">Add Status</span>
  <textarea className="form-control" aria-label="With textarea"></textarea>
</div>


      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Add Work</button>
      </div>
    </div>
  </div>
</div>
</div>
<div className="col-sm-6">
  <label for="formFileSm" className="form-label">Add image</label>
  <input className="form-control form-control-sm" id="formFileSm" type="file"/>
</div>
        </div>
      </div>

<div className="row my-3">
  <div className="col-sm-12 my-3">
    <h2>Professional Details</h2>
    No work found! <br />
    <h2>Educational Details</h2>
    No details <br />
    <h2>Personal Information</h2>
    No details
    <h2>Contact Details</h2>  
    <h3>Email Address:</h3>
    <h3>Contact No.</h3>
    <h3>Lives In:</h3>
  </div>
</div>
</div>
</div>
    </>
  )
}
