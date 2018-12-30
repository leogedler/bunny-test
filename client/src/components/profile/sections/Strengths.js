import React from 'react';

import './Strengths.css';


export default ({ strengths }) => {

  const list = () => {
    return strengths.map((strength) => {
      return (
        <p key={strength.id}><strong>{strength.name}</strong></p>
      )
    })
  }

  return (
    <div>
      <hr />
      <h5>Strengths</h5>
      <div className="strengths-div">
        {list()}
      </div>
      <hr />
    </div>

  )
}