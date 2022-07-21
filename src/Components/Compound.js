import React from 'react'
import './Elements.css';

export default function Compound() {
  return (
    <div className="containers pt-2 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-3 ">
                  <div className="d-flex align-items-start">
                      <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical" style={{color:"white"}}>
                        <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" style={{color:"white"}} type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">post Discussion</button>
                        <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" style={{color:"white"}} type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Career Center</button>
                        <button className="nav-link" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" style={{color:"white"}} type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false">My Groups</button>
                        <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages"style={{color:"white"}} type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">View Jobs</button>
                        <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" style={{color:"white"}}type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Post Jobs</button>
                        <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" style={{color:"white"}}type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Membership Card </button>
                        <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" style={{color:"white"}}type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Post Internship</button>
                        <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" style={{color:"white"}}type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Update Profile</button>
                        <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" style={{color:"white"}}type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Create Group</button>
                        <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" style={{color:"white"}} type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Create Events</button>
                        <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" style={{color:"white"}} type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Home</button>
                        <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" style={{color:"white"}} type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Members</button>
                        <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" style={{color:"white"}} type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Messages</button>
                        <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" style={{color:"white"}} type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">More</button>
                      </div>
                      
        </div>
          </div>
        </div>
      </div>
      
    </div>
    )
}
