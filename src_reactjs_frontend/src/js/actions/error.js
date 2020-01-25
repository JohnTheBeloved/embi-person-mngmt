import { toastr } from 'react-redux-toastr';
import { ERROR_OCCURED } from './types';

const showAlertMessage = (error, title, message, extend) => {
  let extraMessage = error.message || '';
  extraMessage = extraMessage !== '' ? ` due to ${extraMessage}` : '';
  const finalMessage = extend ? `${message}${extraMessage}` : error.message;
  toastr.error(title, finalMessage);
  console.log(error);
};

export const apiCreateErrorOccurred = (error, extend = true) => {
  showAlertMessage(error, 'Error Occurred', error.message ? error.message : 'Creation Unsuccessful', extend);
  return { type: ERROR_OCCURED, error };
};

export const runtimeErrorOccurred = error => ({ type: ERROR_OCCURED, error });

export const apiReadErrorOccurred = (error, extend = true) => {
  showAlertMessage(error, 'Error Occurred', error.message ? error.message : 'Cannot get Items Successfully', extend);
  return { type: ERROR_OCCURED, error };
};

export const apiUpdateErrorOccurred = (error, extend = true) => {
  showAlertMessage(error, 'Error Occurred', error.message ? error.message : 'Update Unsuccessful', extend);
  return { type: ERROR_OCCURED, error };
};

export const apiDeleteErrorOccurred = (error, extend = true) => {
  showAlertMessage(error, error.message ? error.message : 'Error Occurred', 'Delete Unsuccessful', extend);
  return { type: ERROR_OCCURED, error };
};
