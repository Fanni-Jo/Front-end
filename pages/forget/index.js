

function Forget() {
  return (
    <div>
<div class ="container">
    <div class ="col-md-4 mt-4">

      <h3>Forget Password</h3>

      <form>
        <div class="form-group">
          <label for="exampleInputpass">Enter Your Email</label>
          <input type="email" class="form-control" id="exampleInputpasss" aria-describedby="passHelp" placeholder="e-mail"/>
           <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        
        <button type="submit" class="btn btn-primary mt-3">Varificate</button>
      </form>

    </div>
</div>
    </div>
  )
}

export default Forget