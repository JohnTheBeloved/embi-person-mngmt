import React from "react";

import ValidateUtils from "../utils/Validate.js"

export default class NewPersonForm extends React.Component{
	
	constructor(props){

		super(props);
		this.state = {firstName:"",lastName:"",age:"",favouriteColour:"",hobby:[]};
		this.handleFirstnameChange = this.handleFirstnameChange.bind(this);
		this.handleLastnameChange = this.handleLastnameChange.bind(this);
	  this.handleAgeChange = this.handleAgeChange.bind(this);
	  this.handleColourChange = this.handleColourChange.bind(this);
	  this.handleHobbyChange = this.handleHobbyChange.bind(this);
		this.addPerson = this.addPerson.bind(this);

	}	

	  handleFirstnameChange(e) {
	  	this.setState({firstNameIsDirty:true});
	  	let newValue = e.target.value;
	    let newErrorValue = '';
	    //validate stuff here
	    if(newValue === '') {
	      newErrorValue = 'Field is empty';
	      this.setState({firstNameIsDirty:true});
	    }

	    this.setState({
	      firstName: newValue,
	      firstNameError: newErrorValue
	    });

	    if(newErrorValue === ''){
	    	e.target.className = e.target.className.replace("invalid",'');
	    } else  {
	    	e.target.className += 'invalid'
	    }

	    this.setState({firstName:newValue});
	  }


	handleLastnameChange(e) {
		this.setState({lastNameIsDirty:true});
		let newValue = e.target.value;
		let newErrorValue = '';
		//validate stuff here
		if(newValue === '') {
			newErrorValue = 'Field is empty';
			this.setState({lastNameIsDirty:true});
		}

		this.setState({
			lastName: newValue,
			lastNameError: newErrorValue
		});

		if(newErrorValue === ''){
			e.target.className = e.target.className.replace("invalid",'');
		} else  {
			e.target.className += 'invalid'
		}

		this.setState({lastName:newValue});
	}

	handleAgeChange(e) {
		this.setState({ageIsDirty:true});
		let newValue = e.target.value;
		let newErrorValue = '';
		
		if(ValidateUtils.isEmpty(newValue)) {
		  newErrorValue = 'Field is empty';
		  this.setState({ageIsDirty:false});
		}
		if(ValidateUtils.isValidAge(newValue)){
			e.target.className = e.target.className.replace("invalid",'');
		}else{
			newErrorValue = 'Age is invalid';
			if(e.target.className.indexOf('invalid')){
				e.target.className += 'invalid';
			}
		}

		this.setState({
		  age: newValue,
		  ageError: newErrorValue
		});

	}


	handleColourChange(e) {
		this.setState({colourIsDirty:true});
		 let newValue = e.target.value;
		 let newErrorValue = '';
		 if(ValidateUtils.isEmpty(newValue)) {
			 newErrorValue = 'Field is empty';
			 this.setState({colourIsDirty:false});
		 }

		 this.setState({
			 colour: newValue,
			 hobbyError: newErrorValue
		 });

		 if(newErrorValue === ''){
			 e.target.className = e.target.className.replace("invalid",'');
		 }else{
			 e.target.className += 'invalid'
		 }

		 this.setState({favouriteColour : newValue});
 }


 	handleHobbyChange(e) {
 		this.setState({hobbyIsDirty:true});
	    let newValue = e.target.value;
	    let newErrorValue = '';
	    if(ValidateUtils.isEmpty(newValue)) {
	      newErrorValue = 'Field is empty';
	      this.setState({ageIsDirty:false});
	    }

	    this.setState({
	      hobby: newValue,
	      hobbyError: newErrorValue
	    });

	    if(newErrorValue === ''){
	    	e.target.className = e.target.className.replace("invalid",'');
	    }else{
	    	e.target.className += 'invalid'
	    }

	    this.setState({hobby : newValue});
	}

	addPerson(e) {
	    e.preventDefault();
	    if(this.state.firstNameError || this.state.lastNameError || this.state.ageError || this.state.colourError || this.state.hobbyError) {
	      this.setState({showErrors: true});
	      return;
	    }
		const person = {
			first_name: this.state.firstName,
			last_name: this.state.lastName,
			age: this.state.age,
			favourite_colour: this.state.favouriteColour,
			hobby: [ this.state.hobby ]
		}
	  this.props.addPerson(person);
		this.setState({firstName:"",lastName:"",age:"",favouriteColour:"", hobby:[], ageIsDirty:false,numberIsDirty:false,nameIsDirty:false});
	  
	}


	render(){
		return(
 
				<form className="add-new-form" onSubmit={this.addPerson}>
			        <div className="input-margin input-display" >
			        	<input type="text" name="firstName" placeholder="Firstname" value={this.state.firstName} onChange={this.handleFirstnameChange} required/>
			        	<span className={this.state.showErrors ? 'showError' : 'hide'}>{this.state.nameError}</span>
			        </div>
							<div className="input-margin input-display" >
			        	<input type="text" name="lastName" placeholder="lastname" value={this.state.lastName} onChange={this.handleLastnameChange} required/>
			        	<span className={this.state.showErrors ? 'showError' : 'hide'}>{this.state.nameError}</span>
			        </div>
			        <div className="input-margin input-display" >
			        	<input type="text" name="age" placeholder="Age"  value={this.state.age} onChange={this.handleAgeChange} required/>
			        	<span className={this.state.showErrors ? 'showError' : 'hide'}>{this.state.ageError}</span>
			        </div>
			        <div className="input-margin input-display">
			        	<input  type="text" name="favouriteColour" placeholder="Favourite colour"  value={this.state.favouriteColour} onChange={this.handleColourChange} required/>
			        	<span className={this.state.showErrors ? 'showError' : 'hide'}>{this.state.numberError}</span>
			        </div>
			        <div className="input-margin input-display">
			        	<input  type="text" name="hobby" placeholder="Hobby"  value={this.state.hobby} onChange={this.handleHobbyChange} required/>
			        	<span className={this.state.showErrors ? 'showError' : 'hide'}>{this.state.numberError}</span>
			        </div>
			        <div className="input-margin input-display" ><input className={((this.state.firstNameIsDirty && this.state.lastNameIsDirty && this.state.AgeIsDirty && this.state.colourIsDirty && this.state.hobbyIsDirty) && (!this.state.firstNameError || !this.state.lastNameError || !this.state.ageError || !this.state.hobbyError || !this.state.colourError)) ? 'button-blue pull-right' : 'pull-right'} type="submit" value="Add new" /></div>
		        </form>
		      

		);

	}

}