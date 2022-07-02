import React from 'react'

function ResetPassword() {
  return (
    <div >
        <div class ="container bg-reset">
    <div class ="col-md-4 mt-4">


      <form className="container-form-reset">
      <h3>Reset Password</h3>

        <div class="form-group">
          <label for="exampleInputpass">New Password</label>
          <input type="email" class="form-control" id="exampleInputpasss" aria-describedby="passHelp" placeholder="Enter new password"/>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1"> Confirm Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="confirm Password"/>
        </div>
       
        <button type="submit" class="btn btn-primary mt-3">Reset Password</button>
      </form>

    </div>
</div>
    </div>
  )
}

export default ResetPassword