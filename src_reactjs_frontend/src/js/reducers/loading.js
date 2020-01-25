
import initialState from './init';

const loadingReducer = (state = initialState.loadingStatus, action) => {
  const { type } = action;
  const regex = /(.*)_(REQUEST|SUCCESS|FAILURE)/;
  const matches = regex.exec(type);
  if (!matches) return state;

  const [, requestName, requestState] = matches;
  const request = requestName + action.url;
  switch (requestState) {
    case 'REQUEST': {
      const newState = { apiFetching: [...state.apiFetching, request] };
      return newState;
    }
    case 'SUCCESS': {
      const newState = { apiFetching: state.apiFetching.filter(req => req !== request) };
      return newState;
    }
    case 'FAILURE':
    {
      const newState = { apiFetching: state.apiFetching.filter(req => req !== request) };
      return newState;
    }
    default:
      return state;
  }
};

export default loadingReducer;
