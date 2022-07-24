import React from 'react'
import slide6 from './images/slide6.png'
import slide7 from './images/slide7.jpg'

export default function MeetUps() {
  return (
    <>
    <div className="contains" style={{backgroundColor:'white', color:"black"}} >
      <div className="row">
        
        <div className="col-sm-8" style={{backgroundColor:'white', color:"black"}}>
      <div className="row">
        <div className="col-sm-10">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={slide6} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={slide7} className="d-block w-100" alt="..."/>
    </div>
    
  </div>
</div>
        </div>
        <p>A brand new audio platform to connect with your alumni for virtual coffee meets ,learning sessions and networking</p>
      </div>
 {/*-------Button trigger modal------*/}
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Let's get started
</button>

{/*--------Modal---------*/}
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
          <div className="mb-3">
            <label for="recipient-name" className="col-form-label">Meeting Id</label>
            <input type="text" className="form-control" id="recipient-name"/>
          </div>
          <div className="mb-3">
            <label for="message-text" className="col-form-label">You are joining as a host</label>
            <label for="message-text" className="col-form-label">You are joining as a listener</label>

          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Join the Meeting</button>
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
