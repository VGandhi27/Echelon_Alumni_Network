import React from 'react'
import './Elements.css';
import slide1 from './images/slide1.jfif'
import qr from './images/Qr.png'

export default function MembershipCard() {
  return (
    <>
    <div className="containers">
        <div className="containers pb-5 pt-5">
            <div className="row pb-5">
                <div className="col-sm-7 ">
                    <h1>
                        Membership Card
                    </h1>
                    <div className="row pb-5 pt-5">
                    <div className="col-sm-3">
                    <img src={slide1} className="img-thumbnail" alt="..."/>
                    </div>
                    <div className="col-sm-9">
                        <h3 className=' pb-2 pt-2'>Echelon Institute of Technology</h3>
                        <h3 className=' pb-5 pt-2'>Welcomes You</h3>
                        <h4>
                            Name:Vidushi Gandhi <br />
                            Rollno: B.Tech CSE 2020 <br />
                           
                        </h4>
                        <div className="col-sm-6">
                        <div className="text-center">
                        <img src={qr} className="rounded img-thumbnail" alt="..."/>
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
