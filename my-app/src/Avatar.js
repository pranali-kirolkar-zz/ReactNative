import React from 'react';
import './avatarstyle.css';
import './mainpage.css';
import 'tachyons';
import Avatarlist from './Avatarlist';


const Avatar = (props) => {

	 const avatarlistarray=[
	 	{
	 		id:1,
	 		name:"shubham",
	 		work:"web developer"
	 	},
	 	{
	 		id:2,
	 		name:'Nikhil',
	 		work:'python developer'
	 	},
	 	{
	 		id:3,
	 		name:'Swarup',
	 		work:'java developer'
	 	},
	 	{
	 		id:4,
	 		name:'Priyansh',
	 		work:'web developer'
	 	}
	 ]
	return (<div className="mainpage">
		<h1> Welcome to Avatar World </h1>
		
		<Avatarlist id={avatarlistarray[0].name}
					name={avatarlistarray[0].name}
					work={avatarlistarray[0].work} />
		<Avatarlist id={avatarlistarray[1].name}
					name={avatarlistarray[1].name}
					work={avatarlistarray[1].work} />
		<Avatarlist id={avatarlistarray[2].name}
					name={avatarlistarray[2].name}
					work={avatarlistarray[2].work} />
		<Avatarlist id={avatarlistarray[3].name}
					name={avatarlistarray[3].name}
					work={avatarlistarray[3].work} />
		
		<button> Subscribe </button>
		</div>
		)
}

export default Avatar;