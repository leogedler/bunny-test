import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../actions';

class Header extends Component {

  state = {
    link: ''
  };

  componentDidMount() {
    const { fetchLinkedinLink } = this.props;

    fetchLinkedinLink((error, data) => {
      if (!error) {
        this.setState({ link: data.link })
      }
    })

  }

  renderContent() {
    const { showLinkedin } = this.props;
    const { link } = this.state;

    if (showLinkedin) {
      return (
        <li>
          <a href={link}>Merge LinkedIn Profile</a>
        </li>
      );
    }
  }

  render() {
    return (
      <nav className="indigo">
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/blogs' : '/'}
            className="left brand-logo"
            style={{ marginLeft: '10px' }}
          >
            Pro-Profile
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ profile }) => ({ showLinkedin: profile.showLinkedinButton });

export default connect(mapStateToProps, actions)(Header);
