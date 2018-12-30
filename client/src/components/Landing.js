import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class  Landing extends Component {

  state = {
    torreId: '',
    loading: false,
  }

  onSubmitForm = (event) => {
    const { torreId } = this.state;
    const { fetchTorreBio, history } = this.props;
    event.preventDefault();

    this.setState({ loading: true });

    fetchTorreBio(torreId, (error)=>{
      this.setState({ loading: false });
      if(!error){
        sessionStorage.setItem('torreId', torreId);
        history.push('/profile')
      }
    });
  }

  render(){

    const { torreId, loading } = this.state;

    let buttonClass;
    if(loading){
      buttonClass = 'btn waves-effect waves-light disabled';
    }else{
      buttonClass = 'btn waves-effect waves-light'
    }

    return (
      <div style={{ textAlign: 'center' }}>
        <h5>
          Merge your <strong>Torre Bio</strong> and <strong>LinkedIn Profile</strong>
        </h5>
       
        <div>
          <form onSubmit={this.onSubmitForm}>

            <p>First Enter your <a href="https://torre.bio/">Torre Bio</a> Id</p>
            <input type="text" placeholder="Your Torre Id" value={torreId} onChange={ (e) => this.setState({torreId: e.target.value}) } />

            <button className={buttonClass} type="submit">{!loading ? 'Import Torre Bio' : 'Importing Torre Bio...'}</button>

          </form>
        </div>

      </div>
    );
  }
};

export default connect(null, actions)(Landing);
