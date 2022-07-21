import React from 'react'
import './Elements.css';
import iconig from './images/icons8-instagram-50.png'
import iconfb from './images/icons8-facebook-50.png'
import iconln from './images/icons8-linkedin-50.png'
import icontw from './images/icons8-twitter-50.png'
import iconyt from './images/icons8-youtube-50.png'


export default function More() {
  return (
   <>
   <div className="containers">
    <div className="container pb-5 pt-5">
        <div className="row pb-5 pt-5">
            <div className="col-sm-7">
                <h1>More</h1>
                <h3 className='pb-5 pt-5 mx-4'>Share and Invite</h3>
                
                <p className='pb-5 pt-5'>
                <h4>    Please share this with different college  students,Alumni and Faculty </h4> 
         <a href="https://www.facebook.com/EchelonInstituteOfTechnologyOfficial" className='mx-3'> <img src={iconfb} alt="" /></a>
         <a href="https://www.instagram.com/echeloninstituteoftechnology/" className='mx-3'> <img src={iconig} alt="" /></a>
         <a href="https://www.linkedin.com/school/echelon-institute-of-technology/" className='mx-3'> <img src={iconln} alt="" /></a>
         <a href="https://twitter.com/eitfbdofficial" className='mx-3'> <img src={icontw} alt="" /></a>
         <a href="https://www.youtube.com/channel/UCYUk-0QqiX2Ae3k1as0m3Jw" className='mx-3'> <img src={iconyt} alt="" /></a>

        </p>
            </div>
        </div>
    </div>
   </div>
   </>
  )
}
