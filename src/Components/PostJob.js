import React from 'react'
import './Elements.css';

export default function PostJob() {
  return (
    <>
 
    <div className="containers">
        <div className="container ">
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                <form>
                <h1 className='my-3'>Post Job</h1>
                <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>    
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Company Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="col-auto">
                    <label for="inputPassword6" className="col-form-label">Company Name </label>
                </div>
                <div className="col-auto">
                    <input type="text" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
                </div>
               
           
                <div className="col-sm-auto">
                    <label for="text" className="col-form-label">Minimum Experience</label>
                </div>
                <div className="col-sm-auto">
                    <input type="text" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
                </div>

                <div className="col-sm-auto">
                    <label for="text" className="col-form-label">Maximum Experience</label>
                </div>
                <div className="col-sm-auto">
                    <input type="text" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
                </div>

                   
               {/*----------Job Title-----------*/}
               <div className="col-auto">
                    <label for="inputPassword6" className="col-form-label">Location </label>
                </div>
                <div className="col-auto">
                    <input type="text" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
                </div>

                {/*------------Job Description------*/}
                <div className="col-auto">
                    <label for="inputPassword6" className="col-form-label">Contact Email</label>
                </div>
                <div className="col-auto">
                    <input type="text" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
                </div>
                <div className="col-auto">
                    <label for="text" className="col-form-label">Job Description </label>
                </div>
                <div className="col-auto">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>                </div>
   
            <button type="submit" className="btn btn-primary my-3">Post</button>
            </form>
            
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
