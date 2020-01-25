import * as types from '../actions/types';
import initialState from './init';

const personReducer = (state = initialState.person, action) => {
  switch (action.type) {
    case types.CREATED_PERSON:
      const newState = { ...state };
      newState.list = [ ...state.list,  action.person ];
      return newState;
    case types.LOADED_PERSONS: {
      return { ...state, list: action.persons };
    }
    case types.UPDATED_PERSON: {
      const newState = { ...state };
      newState.list = [ ...state.list,  action.person ];
      return newState;
    }
    case types.DELETED_PERSON: {
      const newState = { ...state };
      const index = state.list.map(person => person._id).indexOf(action.personId);
      newState.list.splice(index, 1);
      return newState;
    }
    default:
      return state;
  }
};

export default personReducer;
