import React from 'react'
import './Elements.css';

export default function Message() {
  return (
    <div>
       <div className="containers">
      <div className=" container row pb-5 pt-4">
        <div className="col-sm-10">
          <h1>Messages</h1>
        <div className="mb-3  pb-5">
  <label for="exampleFormControlInput1" className="form-label">To:</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Subject(Optional)" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button type="button" class="btn btn-secondary"> Send=:</button>

        </div>
      </div>
    </div>
    </div>
  )
}
