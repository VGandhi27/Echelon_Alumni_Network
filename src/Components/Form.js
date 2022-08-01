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
                
                {/*---------Button trigger modal--------*/}
<button type="button" className="btn btn-danger btn-lg" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
Alumni
</button>
{/*------Modal------*/}
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg" >
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <h1>Alumni Form</h1>           
        <div >
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
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>

                                {/*---------Button trigger modal--------*/}
<button type="button" className="btn btn-success btn-lg" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
Student
</button>
{/*------Modal------*/}
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg" >
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <h1>Student Form</h1>           
        <div >
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
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>

                <button className="btn btn-primary  btn-lg" type="button">Faculty</button>
                </div>
            </div>
        </div>
</div>


{/*--------Faculty Form-------*/}
<div className="facultyForm pb-5" id="faculty form">
<div className="container pb-5">
    <div className="row ">
        <div className="col-12 pb-5">
        <h1 className='pb-5'>Faculty Form</h1>           
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
