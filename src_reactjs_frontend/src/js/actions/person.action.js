import { toastr } from 'react-redux-toastr';
import api from '../api/person.api';
import {
  CREATED_PERSON, LOADED_PERSONS, UPDATED_PERSON,
  DELETED_PERSON,
} from './types';
import * as error from './error';


const loadSuccess = persons => ({
  type: LOADED_PERSONS, persons,
});

const loadPersons = () => dispatch => api.getAll()
  .then((data) => {
    if (data.length > -1) {
      dispatch(loadSuccess(data));
    } else {
      dispatch(error.apiReadErrorOccurred(data));
      dispatch(loadSuccess([]));
    }
  }).catch((err) => {
    dispatch(error.runtimeErrorOccurred(err));
    throw (err);
  });

const createSuccess = (person) => {
  toastr.success('Success', 'Person created successfully');
  return { type: CREATED_PERSON, person };
};

const create = person => dispatch => api.create(person).then((data) => {
  if (data.id) {
    dispatch(createSuccess(data));
    dispatch(loadPersons());
  } else {
    dispatch(error.apiCreateErrorOccurred(data));
  }
}).catch((error) => {
  throw (error);
});

const updateSuccess = (person) => {
  toastr.success('Success', 'Person Updated Successfully');
  return { type: UPDATED_PERSON, person };
};

const update = person => dispatch => api.update(person).then((data) => {
  if (data.id === person.id) {
    dispatch(updateSuccess(data));
    dispatch(loadPersons());
  } else {
    dispatch(error.apiUpdateErrorOccurred(data));
  }
}).catch((error) => {
  throw (error);
});

const removeSuccess = (personId) => {
  toastr.success('Success', 'Person Deleted Successfully');
  return { type: DELETED_PERSON, personId };
};

const remove = personId => dispatch => api.remove(personId).then((data) => {
  if (data.deleted) {
    dispatch(removeSuccess(personId));
    dispatch(loadPersons());
  } else {
    dispatch(error.apiDeleteErrorOccurred(data));
  }
}).catch((error) => {
  throw (error);
});


export {
  create, createSuccess, loadPersons, loadSuccess, update, updateSuccess, remove, removeSuccess,
};
