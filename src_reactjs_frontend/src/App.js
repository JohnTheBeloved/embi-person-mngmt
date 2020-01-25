import React from 'react';
import ReduxToastr from 'react-redux-toastr';
import { connect, Provider } from 'react-redux';
import { bindActionCreators } from 'redux';

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

import Header from './js/components/Header';
import Body from './js/components/Body';

import store from './js/store/configureStore';

import * as personActions from './js/actions/person.action';

class App extends React.Component {
  constructor() {
    super();
    this.sortPersons = this.sortPersons.bind(this);
    this.addPerson = this.addPerson.bind(this);
    this.updatePerson = this.updatePerson.bind(this);
    this.deletePerson = this.deletePerson.bind(this);
  }

  componentDidMount() {
    this.props.actions.loadPersons();
  }


  sortPersons(key, asc) {
    const arr = this.state.persons;
    arr.sort((a, b) => {
      if (a[key] < b[key]) {
        return -1;
      } if (a[key] > b[key]) {
        return 1;
      }
      return 0;
    });
    this.setState({ persons: asc ? arr : arr.reverse() });
  }


  addPerson(person) {
    this.props.actions.create(person);
  }

  updatePerson(person) {
    this.props.actions.update(person);
  }

  deletePerson(personId) {
    this.props.actions.remove(personId);
  }

  render() {
    return (
      <div>
        <Header />
        <ReduxToastr preventDuplicates />
        <Body
          persons={this.props.persons}
          addPerson={this.addPerson}
          deletePerson={this.deletePerson}
          updatePerson={this.updatePerson}
          sort={this.sortPersons}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  persons: state.person.list,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    personActions,
    dispatch,
  ),
});

const ReduxApp = connect(mapStateToProps, mapDispatchToProps)(App);

const Root = () => <Provider store={store}><ReduxApp /></Provider>;

export default Root;
