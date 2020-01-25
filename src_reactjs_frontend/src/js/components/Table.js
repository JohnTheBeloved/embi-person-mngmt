import React from "react";

import Row from "./Row"

export default class Table extends React.Component{

	constructor(props){
		super(props);
		this.state = {kk:"oo"}
	}

	getSortOrder(columnName){
		if(columnName === "firstName"){
			this.setState({sortFirstNameAsc:(!this.state.sortFirstNameAsc)});
			return !this.state.sortFirstNameAsc;
		}else if(columnName === "lastName"){
			this.setState({sortLasNameAsc:(!this.state.sortLastNameAsc)});
			return !this.state.sorLastNameAsc;
		}else if(columnName === "age"){
			this.setState({sortAgeAsc:(!this.state.sortAgeAsc)});
			return !this.state.sortAgeAsc;
		}else if(columnName === "favouriteColour"){
			this.setState({sortFavouriteColourAsc:(!this.state.sortFavouriteColourAsc)});
			return !this.state.sortFavouriteColourAsc;
		}else if(columnName === "hobby"){
			this.setState({sortHobbyAsc:(!this.state.sortHobbyAsc)});
			return !this.state.sortHobbyAsc;
		}
	}

	render(){
		 
		return(
			 <table>
		        <thead>
		          <tr>
		            <th className="input-margin input-display">Firstname</th>
		            <th className="input-margin input-display">Lastname</th>
		            <th className="input-margin input-display" >Age</th>
		            <th className="input-margin input-display">Fav Colour</th>
							<th className="input-margin input-display">Hobby</th>
		          <th className="input-margin input-display"></th>
							</tr>
		        </thead>
		        <tbody>
		        	{this.props.rows.map( (row, index) => <Row key={row.id} personId={row.id} firstName={row.first_name} lastName={row.last_name} age={row.age} favouriteColour={row.favourite_colour} hobby={row.hobby} deletePerson={ () => {this.props.deletePerson(row.id)}}/>)}
		        	
		        </tbody>
		        <tfoot></tfoot>
		      </table>
		);

	}
}