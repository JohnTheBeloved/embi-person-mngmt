import React from 'react';

import Row from './Row';

export default class Table extends React.Component {

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th className="input-margin input-display">Firstname</th>
            <th className="input-margin input-display">Lastname</th>
            <th className="input-margin input-display">Age</th>
            <th className="input-margin input-display">Fav Colour</th>
            <th className="input-margin input-display">Hobby</th>
            <th className="input-margin input-display" />
          </tr>
        </thead>
        <tbody>
          {
								this.props.rows
								  .map((row, index) => (
  <Row
    key={row.id}
    personId={row.id}
    firstName={row.first_name}
    lastName={row.last_name}
    age={row.age}
    favouriteColour={row.favourite_colour}
    hobby={row.hobby}
    deletePerson={() => { this.props.deletePerson(row.id); }}
    updatePerson={this.props.updatePerson.bind(this)}
  />
								  ))}

        </tbody>
        <tfoot />
      </table>
    );
	}

}
