import React from 'react'
import './Elements.css';

export default function PostDiscussion() {
  return (
   <>
   <div className="containers">
    <div className="container pb-5 pt-5">
        <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-7">
                <h1>Post Discussion </h1>
                   <div className="mb-3">
                        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Description' rows="7"></textarea>
                    
                    </div>
                    <div className="row">
                <div className="col-sm-6">
                <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                    <option s>Cattegories</option>
                    <option value="1">Looking for a Job</option>
                    <option value="2">Seeking help</option>
                    <option value="3">In News</option>
                    <option value="4">Question & Answer</option>
                    <option value="5">Knowledge Base</option>
                    <option value="6">Buy /Sell /Rent</option>
                    <option value="7">Spread the Word</option>
                    <option value="8">Technical help</option>
                    <option value="9">Alumni Introductions</option>
                    <option value="10">Study Experience</option>
                    <option value="11">Work Experience</option>
                    <option value="12">Exam Preparation Experience</option>
                    <option value="13">Interview Experience</option>
                    <option value="14">Experiences - Others</option>


                    </select></div>   
                    <div className="col-sm-6">
                    <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                    <option selected>Groups</option>
                    <option value="1">Visible to all Members</option>
                    <option value="2">B.Tech 2021 CSE</option>
                    <option value="3">Batch of 2020</option>
                    <option value="3">Career Support Center</option>
                    <option value="3">Entreprenurship</option>
                    <option value="3">Study Abroad Support Center</option>
                    </select>
                        </div> 
                     
                        </div>

<div className="row pb-1 pt-3">
    <div className="col-sm-12">
    <div className="mb-3">
  <label for="formFileSm" className="form-label">Insert Images</label>
  <input className="form-control form-control-sm" id="formFileSm" type="file"/>
</div>
    </div>
</div>

                        <div className="row pb-5 pt-5">
                            <div className="col-sm-12">
                            <div className="d-grid gap-2 col-6 mx-auto">
                         <button className="btn btn-primary" type="button">Post</button>
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
