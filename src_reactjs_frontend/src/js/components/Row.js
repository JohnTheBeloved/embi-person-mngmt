import React from 'react';

import Select from 'react-select';
import ValidateUtils from '../utils/Validate.js';

export default class Row extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personId: props.personId,
      firstName: props.firstName,
      lastName: props.lastName,
      age: props.age,
      favouriteColour: props.favouriteColour,
      hobby: props.hobby,
      selectedOption: props.hobby.map(value => ({ label: value, value })),
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(e) {
    if (e.target.className.indexOf('invalid')) {
      e.target.className += 'invalid';
    }

    if (ValidateUtils.isEmpty(e.target.value)) {
      e.target.className = e.target.className.replace('invalid', '');
    }

    this.setState({ [e.target.name]: e.target.value });
  }

  handleEdit(e) {
    this.setState({ oldValue: { ...this.props } });
    this.setState({ edit: true });
    e.preventDefault();
  }

  handleCancel(e) {
    this.setState(this.state.oldValue);
    this.setState({ edit: false });
    e.preventDefault();
  }

  handleDelete(e) {
    this.props.deletePerson(this.state.personId);
    e.preventDefault();
  }

	handleHobbyChange = (selectedOption) => {
	  this.setState(
	    { selectedOption },
	    () => console.log('Option selected:', this.state.selectedOption),
	  );
	};

	handleSubmit(event) {
	  if (!ValidateUtils.isEmpty(this.state.firstName)
			&& !ValidateUtils.isEmpty(this.state.lastName)
			&& !ValidateUtils.isEmpty(this.state.age)
			&& !ValidateUtils.isEmpty(this.state.favouriteColour)
			&& !ValidateUtils.isEmpty(this.state.hobby)) {
	    this.props.updatePerson({
	      id: this.state.personId,
	      first_name: this.state.firstName,
	      last_name: this.state.firstName,
	      age: this.state.age,
	      favourite_colour: this.state.favouriteColour,
	      hobby: this.state.selectedOption.map(option => option.value),
	    });
	    this.setState({
	      edit: false,
	    });
	  } else {
	    // Toast
	  }
	}

	render() {
	  const options = [
	    { value: 'Singing', label: 'Singing' },
	    { value: 'Swimming', label: 'Swimming' },
	    { value: 'Reading', label: 'Reading' },
	    { value: 'Hiking', label: 'Hiking' },
	  ];
	  const { selectedOption } = this.state;

	  return (
  <tr>
    <td className="input-display">
      <input className={this.state.edit ? 'show' : 'hide'} type="text" name="firstName" placeholder="Firstname" value={this.state.firstName} onChange={this.handleChange.bind(this)} />
      <div className={!this.state.edit ? 'show' : 'hide'}>{this.state.firstName}</div>
    </td>
    <td className="input-display">
      <input className={this.state.edit ? 'show' : 'hide'} type="text" name="lastName" placeholder="Lastname" value={this.state.lastName} onChange={this.handleChange.bind(this)} />
      <div className={!this.state.edit ? 'show' : 'hide'}>{this.state.lastName}</div>
    </td>
    <td className="input-display">
      <input className={this.state.edit ? 'show' : 'hide'} type="number" name="age" placeholder="Age" value={this.state.age} onChange={this.handleChange.bind(this)} />
      <div className={!this.state.edit ? 'show' : 'hide'}>{this.state.age}</div>
    </td>
    <td className="input-display">
      <input className={this.state.edit ? 'show' : 'hide'} type="text" name="favouriteColour" placeholder="Favourite colour" value={this.state.favouriteColour} onChange={this.handleChange.bind(this)} />
      <div className={!this.state.edit ? 'show' : 'hide'}>{this.state.favouriteColour}</div>
    </td>
    <td className="input-display">
      <Select isMulti className={this.state.edit ? 'show' : 'hide'} name="hobby" value={selectedOption} onChange={this.handleHobbyChange} options={options} />
      <div className={!this.state.edit ? 'show' : 'hide'}>{this.state.hobby.join(',')}</div>
    </td>
    <td className="input-display">
      <a className={this.state.edit ? 'hide' : 'show'} href="" onClick={this.handleEdit}><i className="icon ion-edit" /></a>
      <a className={this.state.edit ? 'hide' : 'show'} href="" onClick={this.handleDelete}><i className="icon ion-trash-b" /></a>
      <input className={this.state.edit ? 'show button-blue pull-right' : 'hide button-blue pull-right'} onClick={this.handleSubmit.bind(this)} type="submit" value="Save" />
      <input className={this.state.edit ? 'show text-blue pull-right margin-15-right' : 'hide  text-blue pull-right margin-15-right'} onClick={this.handleCancel.bind(this)} type="button" value="Cancel" />
    </td>
  </tr>
	  );
	}
}
