import React from 'react'

function Login() {
  return (
<>
<div>
     

<div class ="container md">
    <div class ="col-md-4 mt-4">

      <h3>Login</h3>

      <form>
        <div class="form-group">
          <label for="exampleInputUsername">Username</label>
          <input type="email" class="form-control" id="exampleInputUsername" aria-describedby="usernameHelp" placeholder="Enter Username"></input>
          
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
        </div>
       
        <button type="submit" class="btn btn-primary">Login</button>
      </form>


      <div >
       New User ? <a href=""  >Signup </a>
      </div>

    </div>
</div>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
    </div>
</>
  )
}

export default Login