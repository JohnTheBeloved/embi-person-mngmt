import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import person from './person.reducer';
import loadingStatus from './loading';
import paginateParams from './paginate-params';

const rootReducer = combineReducers({
  // Vendor
  toastr: toastrReducer,
  // Models
  person,

  // Utils
  loadingStatus,
  paginateParams,
});

export default rootReducer;
