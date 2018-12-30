import { FETCH_TORRE_BIO, FETCH_LINKEDIN_PROFILE, SHOW_LINKEDIN_BUTTON } from '../actions/types';

const INITIAL_STATE = {
  SHOW_LINKEDIN_BUTTON: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TORRE_BIO:
      return { ...state, torreBio: action.payload };
    case FETCH_LINKEDIN_PROFILE:
      return { ...state, linkedinProfile: action.payload };
    case SHOW_LINKEDIN_BUTTON: {
      return { ...state, showLinkedinButton: action.payload }
    }
    default:
      return state;
  }
}
