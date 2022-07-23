import React from 'react'
import slide1 from './images/slide1.jfif'


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
                    <div className="card mb-3" style={{width: "540px;"}}>
<div className="row g-0">
  <div className="col-sm-4">
    <img src={slide1} className="img-fluid rounded-start" alt="..."/>
  </div>
  <div className="col-sm-8">
    <div className="card-body" style={{color:"black;"}}>
    <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
 
       <p className="card-text">

      <div className="mb-3">
<label for="formFileSm" className="form-label">Change Picture</label>
<input className="form-control form-control-sm" id="formFileSm" type="file"/>
</div>

{/*<!-- Button trigger modal -->}*/}
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

{/*<!-- Modal -->*/}
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
      </p>
    </div>
  </div>
</div>
</div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
