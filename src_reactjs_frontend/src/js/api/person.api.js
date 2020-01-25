import store from '../store/configureStore';

const { dispatch } = store;
const common = '/persons/';
class PersonApi {
  static create(person) {
    const url = `${common}`;
    dispatch({ type: 'POST_PERSON_REQUEST', url });
    const request = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(person),
    };
    return fetch(url, request)
      .then(response => response.json())
      .catch((error) => { dispatch({ type: 'POST_PERSON_FAILURE', url }); return error; });
  }

  static getAll() {
    const url = `${common}`;
    dispatch({ type: 'GET_PERSONS_REQUEST', url });
    return fetch(url)
      .then(response => response.json())
      .catch((error) => { dispatch({ type: 'GET_PERSONS_FAILURE', url }); return error; });
  }

  static update(person) {
    const url = `${common}${person.id}`;
    dispatch({ type: 'PUT_PERSON_REQUEST', url });
    const request = {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(person),
    };
    return fetch(url, request)
      .then(response => response.json())
      .catch((error) => { dispatch({ type: 'PUT_PERSON_FAILURE', url }); return error; });
  }

  static remove(personId) {
    const url = `${common}${personId}`;
    dispatch({ type: 'DELETE_PERSON_REQUEST', url });
    const request = {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    };
    return fetch(url, request)
      .then((response) => {
        dispatch({ type: 'DELETE_PERSON_SUCCESS', url });
        return response.json();
      })
      .catch((error) => { dispatch({ type: 'DELETE_PERSON_FAILURE', url }); return error; });
  }
}

export default PersonApi;
