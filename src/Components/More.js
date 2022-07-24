import React from 'react'
import './Elements.css';

import iconig from './images/icons8-instagram-50.png'
import iconfb from './images/icons8-facebook-50.png'
import iconln from './images/icons8-linkedin-50.png'
import icontw from './images/icons8-twitter-50.png'
import iconyt from './images/icons8-youtube-50.png'
import { Link } from 'react-router-dom';


export default function More() {
  return (
   <>
   <div className="containers">
    <div className="container pb-5 pt-5">
        <div className="row pb-5 ">
            <div className="col-sm-3"></div>
            <div className="col-sm-7">
                <h1>More</h1>
                <div className="card border-success mb-3" style={{width: "18rem;"}}>
                <div className="card-body text-success">
                    <h5 className="card-title">Share And Invite</h5>
                    <p className="card-text">Share about your alumni network on social media and help grow the network. <br /> <br />
                    <a href="https://www.facebook.com/EchelonInstituteOfTechnologyOfficial" className='mx-3'> <img src={iconfb} alt="" /></a>
         <a href="https://www.instagram.com/echeloninstituteoftechnology/" className='mx-3'> <img src={iconig} alt="" /></a>
         <a href="https://www.linkedin.com/school/echelon-institute-of-technology/" className='mx-3'> <img src={iconln} alt="" /></a>
         <a href="https://twitter.com/eitfbdofficial" className='mx-3'> <img src={icontw} alt="" /></a>
         <a href="https://www.youtube.com/channel/UCYUk-0QqiX2Ae3k1as0m3Jw" className='mx-3'> <img src={iconyt} alt="" /></a>
                    </p>
                </div>
                <div className="card-header bg-success border-success">Events Ticket 
                {/*--------Button for Modal---------*/}
<button type="button" className="btn btn-primary mx-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
  View
</button>

{/*-------Modal--------*/}
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Events</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        No Events is there.
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
                 </div>
                <div className="card-footer bg-warning border-success">Membership Card
                <Link to="/membershipCard"><button type="button" className="btn btn-primary mx-5"  data-bs-target="#exampleModal">
  View
</button></Link>
                </div>
                <div className="card-footer bg-success border-success">My Profile
                <Link to="/updateProfile"><button type="button" className="btn btn-primary mx-5"  data-bs-target="#exampleModal">
  View
</button></Link></div>
              
                </div>
                
              
            </div>
        </div>
    </div>
   </div>
   </>
  )
}
