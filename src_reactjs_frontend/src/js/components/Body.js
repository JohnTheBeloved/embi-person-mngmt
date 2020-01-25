import React from "react";

import NewPersonForm from "./NewPersonForm"
import Table from "./Table"

export default class Body extends React.Component{
	
	render(){
		return(
			<div className="body">
		      <div className="body-header">List of persons</div>
		      <NewPersonForm addPerson={this.props.addPerson}/>
		     <Table rows={this.props.persons} deletePerson={this.props.deletePerson} sort={this.props.sort}/>
		    </div>
		);
	}
}