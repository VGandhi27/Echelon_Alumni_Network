import React from 'react'
import './Elements.css';
export default function Form() {
  return (
    <>
    <div className="containers pt-5">

<div>
  <h1> EIT AlUMNI NETWORK </h1>
  <div className="row my-4 pt-5 ">
            <div className="col-12 my-4 ">
            <div className="d-grid gap-4 col-4 mx-auto my-auto ">
                
                <button className="btn btn-danger  btn-lg" type="button">Alumni</button>
                <button className="btn btn-success  btn-lg" type="button">Student</button>
                <button className="btn btn-primary  btn-lg" type="button">Faculty</button>
                </div>
            </div>
        </div>
</div>

{/*--------Alumni Form-------*/}
<div className="alumniForm pt-5">
<div className="container pt-5">
    <div className="row pt-3">
        <div className="col-12">
        <h1>Alumni Form</h1>           
        <div className="d-grid gap-4 col-8 mx-auto my-auto ">
            <form>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            
            <div className="row g-3 align-items-center">
                <div className="col-sm-auto">
                    <label for="text" className="col-form-label">Branch</label>
                </div>
                <div className="col-sm-auto">
                    <input type="text" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
                </div>

                <div className="col-sm-auto">
                    <label for="text" className="col-form-label">Batch</label>
                </div>
                <div className="col-sm-auto">
                    <input type="text" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
                </div>

                </div>       
               {/*----------Job Title-----------*/}
               <div className="col-auto">
                    <label for="inputPassword6" className="col-form-label">Job </label>
                </div>
                <div className="col-auto">
                    <input type="text" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
                </div>

                {/*------------Job Description------*/}
                <div className="col-auto">
                    <label for="inputPassword6" className="col-form-label">Job Experience </label>
                </div>
                <div className="col-auto">
                    <input type="text" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
                </div>
                <div className="col-auto">
                    <label for="text" className="col-form-label">Job Position </label>
                </div>
                <div className="col-auto">
                    <input type="text" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
                </div>
   
                <div className="col-auto">
                    <label for="inputPassword6" className="col-form-label">Company Name </label>
                </div>
                <div className="col-auto">
                    <input type="text" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
                </div>
                <div className="col-auto">
                    <label for="inputPassword6" className="col-form-label">College Rollno </label>
                </div>
                <div className="col-auto">
                    <input type="text" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
                </div>



            <button type="submit" className="btn btn-primary my-3">Submit</button>
            </form>
            
            </div>
        </div>
    </div>
</div>
</div>

{/*--------Faculty Form-------*/}
<div className="facultyForm pt-5">
<div className="container pt-5">
    <div className="row pt-5">
        <div className="col-12 pt-5">
        <h1>Faculty Form</h1>           
        <div className="d-grid gap-4 col-8 mx-auto my-auto ">
            <form>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            
            <div className="row g-3 align-items-center">
                <div className="col-sm-auto">
                    <label for="text" className="col-form-label">Department</label>
                </div>
                <div className="col-sm-auto">
                    <input type="text" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
                </div>

                <div className="col-sm-auto">
                    <label for="text" className="col-form-label">Experience</label>
                </div>
                <div className="col-sm-auto">
                    <input type="text" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
                </div>

                </div>       
               {/*----------Job Title-----------*/}
               <div className="col-auto">
                    <label for="inputPassword6" className="col-form-label">Join Since </label>
                </div>
                <div className="col-auto">
                    <input type="text" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
                </div>

                {/*------------Job Description------*/}
                <div className="col-auto">
                    <label for="inputPassword6" className="col-form-label">Job Position </label>
                </div>
                <div className="col-auto">
                    <input type="text" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
                </div>
               
            <button type="submit" className="btn btn-primary my-3">Submit</button>
            </form>
            
            </div>
        </div>
    </div>
</div>
</div>
</div>
    </>
  )
}
