import React from 'react'
import './Elements.css';
import slide5 from './images/slide5.jfif'
import { Link } from 'react-router-dom'

export default function CareerCenter() {
  return (
   <> <div className="containers">
    <div className="container pb-5 pt-5">
      <div className="row pb-5">
        <div className="col-sm-12 pt-4">
          {/*----------Career Center----------*/}
          <h1 >Career Center</h1>
          <div className="accordion accordion-flush containers" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Career Support Center
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
        <div className="row">
        <div className="col-sm-4">
        <img src={slide5} alt="" />
        </div>
         <div className="col-sm-8">
          <h1>Career Support Center</h1>
          <h3>0 Members</h3>
          <div className="d-grid gap-2 d-md-block">
          <Link to="/postDiscussion"><button className="btn btn-primary mx-4" type="button">Write a post</button></Link>
          <button className=" mx-3 btn btn-primary" type="button">Join Now</button>
</div>

         </div>
         </div>
        </div>
    </div>
  </div>
  {/*--------Entreprenurship---------*/}
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Entrepreneurship
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      <div className="row">
        <div className="col-sm-4">
        <img src={slide5} alt="" />
        </div>
         <div className="col-sm-8">
          <h1>Entrepreneurship</h1>
          <h3>0 Members</h3>
          <div className="d-grid gap-2 d-md-block">
          <Link to="/postDiscussion"><button className="btn btn-primary mx-4" type="button">Write a post</button></Link>
          <button className=" mx-3 btn btn-primary" type="button">Join Now</button>
</div>

         </div>
         </div>
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Higher Education Center for Engineering
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
        
      <div className="row">
        <div className="col-sm-4">
        <img src={slide5} alt="" />
        </div>
         <div className="col-sm-8">
          <h1> Higher Education Center for Engineering</h1>
          <h3>0 Members</h3>
          <div className="d-grid gap-2 d-md-block">
          <Link to="/postDiscussion"><button className="btn btn-primary mx-4" type="button">Write a post</button></Link>
          <button className=" mx-3 btn btn-primary" type="button">Join Now</button>
</div>

         </div>
         </div>        
        </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseThree">
        Higher Education Center for MBA
      </button>
    </h2>
    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      <div className="row">
        <div className="col-sm-4">
        <img src={slide5} alt="" />
        </div>
         <div className="col-sm-8">
          <h1>Higher Education Center for MBA</h1>
          <h3>0 Members</h3>
          <div className="d-grid gap-2 d-md-block">
          <Link to="/postDiscussion"><button className="btn btn-primary mx-4" type="button">Write a post</button></Link>
          <button className=" mx-3 btn btn-primary" type="button">Join Now</button>
</div>

         </div>
         </div>        
        
        </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingFive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseThree">
        Study Abroad Suport System
      </button>
    </h2>
    <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
        
        
      <div className="row">
        <div className="col-sm-4 pb-5">
        <img src={slide5} alt="" />
        </div>
         <div className="col-sm-8 pb-5">
          <h1> Study Abroad Suport System</h1>
          <h3>0 Members</h3>
          <div className="d-grid gap-2 d-md-block">
          <Link to="/postDiscussion"><button className="btn btn-primary mx-4" type="button">Write a post</button></Link>
          <button className=" mx-3 btn btn-primary" type="button">Join Now</button>
</div>

         </div>
         </div>        
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
