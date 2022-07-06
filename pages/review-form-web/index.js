import { useThemeContext } from "../context/Theme"
import axios from "axios"
import Link from "next/link"

const ReviewFormWeb = () => {
    const [islogin, setlogin] = useThemeContext()
  const [user, setuser] = useThemeContext()
  const reviewCreator=async(e)=>{
	e.preventDefault()
	await axios.get('https://fanni-jo.herokuapp.com/api/users/').then((res)=>{
		res.data.map(async(item)=>{
		
			if(user===item.username){
				await axios.post(
					"https://fanni-jo.herokuapp.com/api/review/",{
						stars: e.target.rating.value,
						username: item.id,
						text: e.target.text.value
					}
				).then(
					e.target.reset(),
					alert("Thank you for your comment")
				)
			}
		})
	})
  }
    return ( 
        <>
       	{islogin ? 
		<div class="container vh-100">
			<div className="col-md-6">
				<div className="row">
		<h1 className="mt-5">We appricate every feedback </h1>
		</div>
		<form className="form-block" onSubmit={reviewCreator}>
		<div className="row">
			<div className="col-xs-12 col-sm-6">
				<div className="form-group fl_icon">
				
				 <label for="rating" className="m-2">Rate us </label>
					<select id="rating" name="rating">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
					{/* <input className="ml-2" type="submit" ></input> */}

				</div>
			</div>
			<div className="col-xs-12">									
				<div className="form-group">
					<textarea className="form-input text-dark" required="" placeholder="Your text" id="text"></textarea>
				</div>
			</div>
			<button className="btn btn-primary pull-right" type="submit">submit</button>
		</div>
	</form> </div></div> :
	  
	
	(
	
	<>

	
	<div class="container vh-100">
    <h1 class="mt-5">Login to continue </h1>
    <p className="lead"> <Link href="/Login"><a>Login</a></Link> to add your review</p>
  </div>

	</>)
	
	}
        </>
		
     );
}
 
export default ReviewFormWeb;