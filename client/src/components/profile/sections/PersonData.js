import React, { Component } from 'react';

class PersonData extends Component {

  location(){
    const { linkedData } = this.props;
    if(linkedData && linkedData.location){
      return (
        <p className="linkedColor">{linkedData.location.name}</p>
      )
    }
    return null;
    
  }

  linkedinConnection(){
    const { linkedData } = this.props;
    if(linkedData && linkedData.numConnections){
      return (
        <h5> <strong className="linkedColor">{linkedData.numConnections}</strong> Linkedin connections</h5>
      )
    }
    return null;
  }

  headLine(){
    const { person, linkedData } = this.props;

    if(linkedData && linkedData.headline){
      return <p className="linkedColor">{linkedData.headline}</p>
    }
    return <p>{person.professionalHeadline}</p>
    
  }

  renderImage(){
    const { person, linkedData } = this.props;
    if(linkedData && linkedData.pictureUrl && linkedData.firstName){
      return <img alt={linkedData.firstName} width="200" src={linkedData.pictureUrl}></img>
    }
    return <img alt={person.name} width="200" src={person.picture}></img>
  }

  renderSummary(){
    const { person, linkedData } = this.props;
    if(linkedData && linkedData.summary){
      return <p className="linkedColor">{linkedData.summary}</p>
    }
    return <p>{person.summaryOfBio}</p>
  }

  render() {
    const { person } = this.props;
    return (
      <div className="center-align">
        <div>
          {this.renderImage()}
          <h5><strong>{person.name}</strong></h5>
          {this.location()}
          {this.linkedinConnection()}
          {this.headLine()}
        </div>

        <div>
          <hr />
          <h5>Summary</h5>
          {this.renderSummary()}
        </div>

      </div>
    )

  }
}

export default PersonData;