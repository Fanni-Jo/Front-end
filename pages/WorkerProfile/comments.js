import Image from "next/image"
import pic13 from "../src/img/portfolio/15.svg"
// import email from "../src/img/portfolio/email.svg"
// import user from "../src/img/portfolio/user.svg"

const Commit = () => {
    return ( 
     
        
<div class="container">
<div class="be-comment-block">
	<h1 class="comments-title">Comments (3)</h1>
	<div class="be-comment">
		<div class="be-img-comment">	
			<a href="blog-detail-2.html">
				<Image src={pic13} alt="" class="be-ava-comment"/>
			</a>
		</div>
		<div class="be-comment-content">
			
				<span class="be-comment-name">
					<a href="blog-detail-2.html">Ravi Sah</a>
					</span>
				<span class="be-comment-time">
					<i class="fa fa-clock-o"></i>
					May 27, 20222 at 3:14am
				</span>

			<p class="be-comment-text">
				Pellentesque gravida tristique ultrices. 
				Sed blandit varius mauris, vel volutpat urna hendrerit id. 
				Curabitur rutrum dolor gravida turpis tristique efficitur.
			</p>
		</div>
	</div>
	<div class="be-comment">
		<div class="be-img-comment">	
			<a href="blog-detail-2.html">
				<Image src={pic13} alt="" class="be-ava-comment"/>
			</a>
		</div>
		<div class="be-comment-content">
			<span class="be-comment-name">
				<a href="blog-detail-2.html">Phoenix, the Creative Studio</a>
			</span>
			<span class="be-comment-time">
				<i class="fa fa-clock-o"></i>
				May 27, 2022 at 3:14am
			</span>
			<p class="be-comment-text">
				Nunc ornare sed dolor sed mattis. In scelerisque dui a arcu mattis, at maximus eros commodo. Cras magna nunc, cursus lobortis luctus at, sollicitudin vel neque. Duis eleifend lorem non ant. Proin ut ornare lectus, vel eleifend est. Fusce hendrerit dui in turpis tristique blandit.
			</p>
		</div>
	</div>
	<div class="be-comment">
		<div class="be-img-comment">	
			<a href="blog-detail-2.html">
				<Image src={pic13} alt="" class="be-ava-comment"/>
			</a>
		</div>
		<div class="be-comment-content">
			<span class="be-comment-name">
				<a href="blog-detail-2.html">Cüneyt ŞEN</a>
			</span>
			<span class="be-comment-time">
				<i class="fa fa-clock-o"></i>
				May 27, 2022 at 3:14am
			</span>
			<p class="be-comment-text">
				Cras magna nunc, cursus lobortis luctus at, sollicitudin vel neque. Duis eleifend lorem non ant
			</p>
		</div>
	</div>
	<form class="form-block">
		<div class="row">
			<div class="col-xs-12 col-sm-6">
				<div class="form-group fl_icon">
					<div class="icon"><Image src={pic13}/></div>
					<input class="form-input" type="text" placeholder="Your name"/>
				</div>
			</div>
			<div class="col-xs-12 col-sm-6 fl_icon">
				<div class="form-group fl_icon">
					<div class="icon "><Image src={pic13}/></div>
					<input class="form-input" type="email" placeholder="Your email"/>
				</div>
			</div>
			<div class="col-xs-12">									
				<div class="form-group">
					<textarea class="form-input" required="" placeholder="Your text"></textarea>
				</div>
			</div>
			<a class="btn btn-primary pull-right">submit</a>
		</div>
	</form>
</div>
</div>
        
     );
}
 
export default Commit;