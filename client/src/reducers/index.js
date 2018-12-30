import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import profileReducer from './profileReducer';

export default combineReducers({
  form: reduxForm,
  profile: profileReducer
});
