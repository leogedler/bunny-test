import React, { Component } from 'react';
import { connect } from 'react-redux';

import './MainProfile.css';

import * as actions from '../../actions';
import PersonData from './sections/PersonData';
import Strengths from './sections/Strengths';
import Jobs from './sections/Jobs';
import Education from './sections/Education';

class MainProfile extends Component {

  componentDidMount() {
    const {
      location,
      fetchLinkedinProfile,
      fetchTorreBio,
      linkedinProfile,
      torreBio,
      history,
      showLinkedinButton,
    } = this.props;

    const params = new URLSearchParams(location.search);

    let key;
    const torreId = sessionStorage.getItem('torreId');
    if (params.get('key')) {
      key = params.get('key');
    } else if (sessionStorage.getItem('key')) {
      key = sessionStorage.getItem('key');
    }

    if (!key && !torreId) {
      history.push('./');
    }

    if(!linkedinProfile){
      showLinkedinButton(true);
      if (key) {
        sessionStorage.setItem('key', key);
        fetchLinkedinProfile(key, (error) => {
          if (error) {
            this.handleError();
          }else{
            showLinkedinButton(false);
          }
        });
      }
    }


    if (torreId && !torreBio) {
      fetchTorreBio(torreId, (error) => {
        if (error) {
          this.handleError();
        }
      });
    }
  }

  componentWillUnmount(){
    const { showLinkedinButton } = this.props;
    showLinkedinButton(false);
  }

  handleError() {
    const { history } = this.props;
    sessionStorage.removeItem('torreId');
    sessionStorage.removeItem('key');
    history.push('/');
  }

  renderTitle() {
    const { torreBio, linkedinProfile } = this.props;

    if (torreBio && linkedinProfile) {
      return <h5><strogn>Composed Torre Bio and Linkedin Profile</strogn></h5>;
    } else if (torreBio) {
      return <h5><strong>Torre Bio</strong></h5>;
    }
  }

  renderMainContent() {
    const { torreBio, linkedinProfile } = this.props;
    if (torreBio) {
      return (
        <div>
          <PersonData person={torreBio.person} linkedData={linkedinProfile} />
          <Strengths strengths={torreBio.strengths} />
          <Jobs jobs={torreBio.jobs} />
          <Education educations={torreBio.education} />
        </div>
      )
    } else {
      return (
        <div className="center-align progress-div">
          <div className="preloader-wrapper big active">
            <div className="spinner-layer spinner-blue-only">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
        </div>
      )

    }
  }

  render() {
    return (
      <div>
        <div className="center-align">
          <div className="profile-title">
            {this.renderTitle()}
          </div>
        </div>
        {this.renderMainContent()}
      </div>

    )
  }
}

const mapStateToProps = ({ profile }) => ({ torreBio: profile.torreBio, linkedinProfile: profile.linkedinProfile });

export default connect(mapStateToProps, actions)(MainProfile);