import React from 'react';
import web from '../src/image/s1.jpg';
import webdevelop from '../src/image/webdevelop.jpeg';
import go from '../src/image/go.jpeg';
import python from '../src/image/python.jpg';
import java from '../src/image/java.jpg';
import algorithm from '../src/image/algorithm.jpg';


const Service =()=>{
	return (
		<>
		<div className="my-5">
		<h1 className="text-center"> OUR SERVICES</h1>
		</div>
		<div className="container-fluid mb-5">
			<div className="row">
				<div className="col-10 mx-auto">
					<div className="row gy-4">
					<div className="col-md-4 col-10 mx-auto">
					<div class="card">
  						<img src={web} class="card-img-top" alt="..."/>
  							<div class="card-body">
    							<h5 class="card-title">REACT NATIVE TUTORIAL</h5>
    								<p class="card-text">Understand React Native v0.62.2 with Hooks, Context, and React Navigation.</p>
    									<a href="#" class="btn btn-primary">Go somewhere</a>
  							</div>
					</div>
					</div>

					<div className="col-md-4 col-10 mx-auto">
					<div class="card">
  						<img src={webdevelop} class="card-img-top" alt="..."/>
  							<div class="card-body">
    							<h5 class="card-title">WEB DEVELOPMENT</h5>
    								<p class="card-text">Learn Web Development by building 25 websites and mobile apps!   </p>
    									<a href="#" class="btn btn-primary">Go somewhere</a>
  							</div>
					</div>
					</div>

					<div className="col-md-4 col-10 mx-auto">
					<div class="card">
  						<img src={go} class="card-img-top" alt="..."/>
  							<div class="card-body">
    							<h5 class="card-title">GO LANGUAGE COURSE</h5>
    								<p class="card-text">Master the fundamentals & advanced features of the Go Programming.</p>
    									<a href="#" class="btn btn-primary">Go somewhere</a>
  							</div>
					</div>
					</div>

					<div className="col-md-4 col-10 mx-auto">
					<div class="card">
  						<img src={python} class="card-img-top" alt="..."/>
  							<div class="card-body">
    							<h5 class="card-title">PYTHON COURSE</h5>
    								<p class="card-text">Go from Beginner to Expert in Python by building projects. The best investment for your Python journey!</p>
    									<a href="#" class="btn btn-primary">Go somewhere</a>
  							</div>
					</div>
					</div>

					<div className="col-md-4 col-10 mx-auto">
					<div class="card">
  						<img src={java} class="card-img-top" alt="..."/>
  							<div class="card-body">
    							<h5 class="card-title">JAVA PROGRAMMIMG LANGUAGE</h5>
    								<p class="card-text">From Java Beginner to Java Expert in ten simple steps.</p>
    									<a href="#" class="btn btn-primary">Go somewhere</a>
  							</div>
					</div>
					</div>

					<div className="col-md-4 col-10 mx-auto">
					<div class="card">
  						<img src={algorithm} class="card-img-top" alt="..."/>
  							<div class="card-body">
    							<h5 class="card-title">DATA STRUCTURE ALGORITHM</h5>
    								<p class="card-text">A guide to implement data structures, graph algorithms and sorting algorithms from scratch with interview questions!</p>
    									<a href="#" class="btn btn-primary">Go somewhere</a>
  							</div>
					</div>
					</div>
					</div>
				</div>
			</div>
		</div>
		</>
		);
};

export default Service;