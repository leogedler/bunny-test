import axios from 'axios';
import { FETCH_TORRE_BIO, FETCH_LINKEDIN_PROFILE, SHOW_LINKEDIN_BUTTON } from './types';

export const fetchTorreBio = (id, callback) => async dispatch => {

  try {
    const res = await axios.get(`/api/torre/${id}`);
    dispatch({ type: FETCH_TORRE_BIO, payload: res.data });
    callback(null);

  } catch (error) {
    callback(error);
  }
};

export const fetchLinkedinProfile = (key, callback) => async dispatch => {

  try {
    const res = await axios.get(`/api/linkedin/${key}`);
    dispatch({ type: FETCH_LINKEDIN_PROFILE, payload: res.data });
    callback(null);

  } catch (error) {
    callback(error);
  }
};

export const showLinkedinButton = (show) => {
  return {
    type: SHOW_LINKEDIN_BUTTON,
    payload: show
  }
}

export const fetchLinkedinLink = (callback) => async dispatch =>{
  try {
    const response = await axios.get('/auth/linkedin/link');
    callback(null, response.data);
  } catch (error) {
    callback(error);
  }
}
