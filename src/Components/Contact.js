import React from "react";

function Contact() {
  return (
    <div>
      <div className="text-center m-3">
        <h1>Contact</h1>
      </div>

        <p className="text-center m-3">Submit the form  to  get in touch with me</p>

        <div className="container col-lg-6   justify-content-center">
      <form action="https://getform.io/f/296cc257-1e8c-4413-b482-61ccc916cbfa" method="POST" className="justify-content-center">
      <div class="form-floating m-3 ">
  <input name="name" type="text" class="form-control" id="floatingInput" placeholder="Your Name"/>
  <label for="floatingInput">Name</label>
</div>
<div class="form-floating m-3">
  <input name="email" type="email" class="form-control" id="floatingPassword" placeholder="Your Email"/>
  <label for="floatingPassword">Email</label>
</div>
<div class="form-floating m-3">
  <textarea name="message" class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" rows="3"></textarea>
  <label for="floatingTextarea2">Message</label>
</div>
<div className=" d-grid gap-2 d-flex justify-content-center m-3">
        <button type="submit" class="btn btn-dark ">
          Let's Talk
        </button>
        </div>

        
      </form>
    </div>



    </div>
    
  );
}

export default Contact;


{/* <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
        <label for="exampleInputPassword1" class="form-label">
            Message
          </label>
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="3"
            className="form-control"
          ></textarea>
        </div>
        <div className=" d-grid gap-2 d-flex justify-content-center">
        <button type="submit" class="btn btn-light ">
          Let's Talk
        </button>
        </div> */}