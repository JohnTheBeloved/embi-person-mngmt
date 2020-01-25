import * as types from '../actions/types';
import { defaultParams } from '../actions/paginate-params';

const paginateParamsReducer = (state = defaultParams, action) => {
  switch (action.type) {
    case types.PAGED_API_RECEIVED:
      return action.paginateParams;
    default:
      return state;
  }
};

export default paginateParamsReducer;
