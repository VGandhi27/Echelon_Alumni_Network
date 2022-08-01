import React from 'react'
import GoogleLogin from 'react-google-login'
import slide4 from './images/slide1.jpg'
import ci1 from './images/ci1.png'
import ci2 from './images/ci2.jpg'
import ci3 from './images/ci3.jpg'
import slide2 from './images/slide2.jpg'
import slide3 from './images/slide3.jpg'
import iconig from './images/icons8-instagram-50.png'
import iconfb from './images/icons8-facebook-50.png'
import iconln from './images/icons8-linkedin-50.png'
import icontw from './images/icons8-twitter-50.png'
import iconyt from './images/icons8-youtube-50.png'

 

export default function About() {
 

  responseGoogle=(response)=>{
   console.log(response);
   console.log(response.profileObj);
   
  }
  
 return (
<>
<hr className="text-danger border-2 opacity-50 width-10px"/>
<hr className="border-primary border-3 opacity-75"/>
    <div className="container">
        <div className="row g-2">
        
  {/*-----------Image Slideshow-------------*/}
      <div className="col-sm-8">
                      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={slide4} className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src={slide4} className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src={slide4} className="d-block w-100" alt="..."/>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
</div>
{/*-----------Login form-------------*/}
            <div className="col-sm-4">
            <form>
                <div className="mb-3">
                  <h4>Join/Login Echelon Alumni Network</h4>
                     <div className="d-grid gap-2">
                      <GoogleLogin
                      clientId="1041675638875-51k4lsab7mubii64kfgagif775609p2q.apps.googleusercontent.com"
                      buttonText="SignIn with Google"
                      onSuccess={this.responseGoogle}
                      onFailure={this.responseGoogle}
                      cookiesPolicy={'single_host_origin'}
                      />
                    <button className="btn btn-danger mb-2" type="button">Connect with Google</button>
                    <button className="btn btn-info mb-2" type="button">Connect with Linkedin</button>
                    <button className="btn btn-primary mb-2" type="button">Connect with FaceBook</button>
                    <button type="submit" className="btn btn-success">SignUp with Email</button>
                    <hr />
                    <a href="#about">Login with OTP</a>
                    <p>By signing up, you agree to our <br />
                      terms and conditions and privacy policy <br />
                      About  |  Jobs  |  FAQ  |  Privacy  |  Terms</p>
                    </div>
                   </div>
         
                  </form>
            </div>
         </div>
         {/*------------About Section---------------*/}
  <div className="row">
    <div className="col-sm-8">
    <h1>About Us</h1>
    <p>
    The Alumni Affairs Cell of EIT is recognized as an important and valuable resource by the EIT community. The Alumni Affairs Cell is the official cell for you and other EIT alumni around the world. Our alumni and friends are promoters for the Institute, shining stars for our students, job providers of our graduates, and sources of guidance and inspiration for our alumni community and academic work. We facilitate plenty of networking opportunities, offer professional resources, institute-led trips, and treks to enhance your experience and connection with the institute. We can vouch that we have a tremendous asset in the form of our highly accomplished and knowledgeable alumni and friends. We will continue to forge lifelong relationships, foster and build our relationship with these ambassadors and champions.
 <br />
 If you graduated with a degree from EIT or you are still pursuing your degree from EIT, you are automatically a part of the Alumni Affairs Cell. We strive to keep each one of you connected with each other and with EIT.
    </p>
    <h1>Membership Benefits</h1>
    <ul>
      <li>Stay connected with your batchmates and friends</li>
      <li>Take part in networking opportunities organized by IIT Mandi.</li>
      <li>Enjoy various on- and off-campus alumni events</li>
      <li>Become influential ambassadors of your alma maters in the corporate world.</li>
    </ul>
    <button className="btn btn-primary mb-2" type="button">Login to EIT Faridabad Alumni Network </button>

    </div>
  </div>
 
 {/*------------Alumni News-----------------*/}
 <div className="news">
 <div className="row ">
 <h1 className='mx-3 my-3'>Echelon Alumni News</h1>

 {/*----------Card Insertion----------------*/}
            <div className="col-sm-4 ">
            <div className="card" style={{width: "18rem"}}>
              <img src={ci1} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Vinodh Gopal, EIT Faridabad Alum Innovation Makes Online Shopping Secure</h5>
                <p className="card-text">Intel's Vinodh Gopal became the company's Innovator of the Year in 2019. He holds 270 US patents,…</p>
                <a href="#about" className="btn btn-primary">Read More</a>
              </div>
            </div>
            </div>
 {/*----------Card Insertion----------------*/}
 <div className="col-sm-4">
            <div className="card" style={{width: "18rem"}}>
              <img src={ci2} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">EIT Faridabad Alumnus Appointed Senior Software Developer at Microsoft</h5>
                <p className="card-text">EIT Faridabad Alumnus, Ajit Ranade, has been appointed Senior Software Developer of the Microsoft in Bengaluru , India…</p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
            </div>
{/*----------Card Insertion----------------*/}
<div className="col-sm-4 ">
            <div className="card" style={{width: "18rem"}}>
              <img src={ci3} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Parag Agrawal,EIT Faridabad Alumnus Appointed Twitter CEO</h5>
                <p className="card-text">Parag Agrawal, a B-Tech graduate in Computer Science Engineering from EIT Faridabad, M.Tech. in Computer Science from</p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
            </div>           
 </div>
 </div>
 {/*--------Alumni Meet Photos----------*/}
 <div className="alumniMeet">
  <div className="row">
    <h1 className='mx-3 my-3'>Alumni Meet Photos</h1>
    {/*-----------Card 1------------*/}
    <div className="col-sm-6">
        <div className="card bg-dark text-white">
         <img src={slide2} className="card-img" alt="..."/>
         <div className="card-img-overlay">
        <h5 className="card-title">Alumni Meet 2021</h5>
        <p className="card-text"></p>
        <p className="card-text">Last updated 3 mins ago</p>
        </div>
       </div>
        </div>
    {/*-----------Card 2------------*/}
    <div className="col-sm-6">
    <div className="card bg-dark text-white">
         <img src={slide3} className="card-img" alt="..."/>
         <div className="card-img-overlay">
        <h5 className="card-title">Alumni Meet 2018</h5>
        <p className="card-text"></p>
        <p className="card-text">Last updated 3 mins ago</p>
        </div>
       </div>
        </div>    
  </div>
 </div>
 {/*-------------A Glimpse of alumni activities--------------*/}
 <div className="alumniActivity">
  <div className="row">
  <h1 className='mx-3 my-3'>A Glimpse of alumni activities</h1>

    {/*--------------Young Achievers Awards---------------*/}
    <div className="col-sm-6">
    <div className="col-sm-8 my-3">
        <div className="card ">
        <img src={slide2} className="card-img-top" alt="..."/>
        <div className="card-body">
          
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>

  </div>
    </div>
    <div className="col-sm-6">
      <h3 className='my-3'>Young Achievers Awards</h3>
      <p>YAA (Young Achievers Awards) are given to those alumni who have brought laurels to the Institute by contributing to society and for their academic excellence. The awards are given during the Institute foundation function. Any alumni who have not received the award earlier and who are 35 years of age or under, can also self-nominate for the award. However, nominations can be made for outstanding achievements under the following categories:
      </p>
        <ul>
          <li>Academic excellence</li>
          <li>Professional excellence</li>
          <li>Entrepreneurship and Management</li>
          <li>Any other activity pertaining to the service of Humanity at large</li>
        </ul>
     
    
    </div>
 {/*----------Alumni Meets and Re-union-----------*/}
 <div className="col-sm-6">
        <div className="col-sm-8 my-3">
        <div className="card ">
        <img src={slide2} className="card-img-top" alt="..."/>
        <div className="card-body">
          
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>

  </div>
  </div> 
  <div className="col-sm-6">
    <h3 className='my-3'>Alumni Meets and Re-union</h3>
    <p>Alumni meets are worthy events that provide a good platform to present students to interact and communicate with their seniors. The first Alumni meet of EIT Faridabad was organized in the year-2018. The first batch of 2007 – 11 to the last outgoing batch of 2017 came back to the campus to relive their old memories. On 26th May the session was divided into two parts. The first part was the interaction between faculty and alumni while the second part was the interaction between current students and alumni. Post lunch, there was an interactive session of alumni and current students. This session was followed by sports matches in which many alumni participated. Finally, there was dinner at Raj Mahal along with some faculties to call it a day.</p>
  </div> 
  {/*-----------Alumni Chapters----------*/}
  <div className="col-sm-6">
  <div className="col-sm-8 my-3">
        <div className="card ">
        <img src={slide2} className="card-img-top" alt="..."/>
        <div className="card-body">
          
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>

  </div>
  </div>
  <div className="col-sm-6">
    <h3 className='my-3'>Alumni Chapters</h3>
    <p>
    Alumni chapters are local, friendly and accessible points of contact for alumni. They bring together alumni from all walks of life. These chapters play a vital role, as they facilitate networking and social opportunities for both current and previous students. Current active alumni chapters:
    <ul>
      <li>Bangalore Chapter</li>
      <li>Delhi Chapter</li>
      <li>Mumbai Chapter</li>
      <li>North America Chapter</li>
    </ul>
    </p>
  </div>
  </div>
 </div>
{/*----------Media Section------------*/}
<div className="media">
  <div className="row">
    <h1 className='mx-3 my-4'>Media</h1>
    <div className="col-sm-4">
      
    </div>
    
    <div className="col-sm-4"></div>
    <div className="col-sm-4"></div>

  </div>
</div>
{/*---------Contact Section-----------*/}
<div className="row">
        <div className="col-sm-12">
        <h1>Contact Us</h1>
        <div className="container container my-5">
        <p>
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
{/*----------Footer Section------------*/}
<div className="row">
<div className="col-sm-12">
<hr className="text-danger border-5 opacity-50 " style={{height:"20px"}}/>
  <h5>  Created by Vidushi Gandhi |  &#169; 2022 All Right Reserved.</h5>
  </div>         
  </div>
    </>
  )
}
