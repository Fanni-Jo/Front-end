import Image from  'next/image'

function WorkerReview() {
  return (

    <div>
         <div class ="container mt-4 ">

<div class ="row">

        <div class="col-md-6  text-center">
         {/* <Image class="card-img-top"  src="@" alt="..."/> */}
         <button type="button" class="btn btn-dark mt-4 " style={{width: 200}}>Select </button> 
        <hr/>

        </div>
        <div class="col-md-6">
            <h1>Information</h1>
            
        </div>
</div>
</div>

<div class ="container mt-2 ">
    

    <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label fw-bold fst-italic">Leave Your Review  </label>
             <br/>
            
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>      
        </div>

        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
            <label class="form-check-label" for="inlineRadio1">1</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
            <label class="form-check-label" for="inlineRadio2">2</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/> 
            <label class="form-check-label" for="inlineRadio3">3 </label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
            <label class="form-check-label" for="inlineRadio3">4 </label>
          </div>

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
            <label class="form-check-label" for="inlineRadio3">5 </label>
          </div>


        <button type="submit" class="btn btn-primary">Add Review</button>
      </form>
       
        



     



      
      
</div>







  
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>


    </div>
  )
}

export default WorkerReview