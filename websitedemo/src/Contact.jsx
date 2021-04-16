import React,{ useState} from 'react';

const Contact =() => {
	const [data,setData]=useState({
		fullname:" ",
		mobile:" ",
		email:"",
		meg:"",
	});

	const InputEvent =(event) =>{
		const {name,value} = event.target;

		setData((preval) => {
			return {
				...preval,
				[name]: value,
			}
		})
	};

	const formSubmit =(e)=>{
		e.preventDefault();
		alert('${data.email}');
	};

	return(
		<>
			<div className="my-5">
				<h1 className="text-center">Contact US</h1>
			</div>
			<div className="container contact-div">
				<div className="row">
					<div className="col-md-6 col-10 mx-auto">
					<form onSubmit={formSubmit}>
					<div class="mb-3">
  						<label for="exampleFormControlInput1" class="form-label">FULL NAME</label>
  						<input type="text" class="form-control" id="exampleFormControlInput1" 
  						name="fullname" value={data.fullname} onChange={InputEvent}/>
					</div>
					<div class="mb-3">
  						<label for="exampleFormControlInput1" class="form-label">EMAIL ADDRESS</label>
  						<input type="email" class="form-control" id="exampleFormControlInput1" 
  						name="email" value={data.email} onChange={InputEvent}
  						placeholder="Email Address"/>
					</div>
					<div class="mb-3">
  						<label for="exampleFormControlInput1" class="form-label">MOBILE NO</label>
  						<input type="number" class="form-control" id="exampleFormControlInput1" 
  						name="mobile" value={data.mobile} onChange={InputEvent}
  						placeholder="Enter Your Mobile No"/>
					</div>
					<div class="mb-3">
 						<label for="exampleFormControlTextarea1" class="form-label">MESSAGE</label>
  						<textarea class="form-control" id="exampleFormControlTextarea1" 
  						rows="3" name="msg" value={data.msg} onChange={InputEvent}></textarea>
					</div>
					<div className="col-12">
						<button className="btn btn-outline-primary" type="submit">
						SUBMIT  
						</button>
					</div>
					</form>
				</div>
			</div>
			</div>	
		</>
		);
};

export default Contact;