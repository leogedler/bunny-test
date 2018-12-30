import React from 'react';
import './Education.css';

export default ({ educations }) => {

  const list = () => {
    return educations.map((education) => {
      return (
        <div key={education.id} className="col s12 m12">
          <div className="card">
            <div className="card-content">
              <span className="card-title">
                <div className="education-title">
                  <strong>{education.name}</strong>
                  <p>{education.organizations[0].name}</p>
                </div>
              </span>
              <p>{education.additionalInfo}</p>
            </div>
            <div className="card-action">
              <div className="education-duration">
                <div>
                  <p>from <strong>{education.fromMonth} {education.fromYear}</strong></p>
                </div>
                <div>
                  {education.toMonth ? <p>to <strong>{education.toMonth} {education.toYear}</strong></p> : <p><strong>In progress</strong></p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <div>
      <hr />
      <h5>Education</h5>
      <div className="row">
        {list()}
      </div>
    </div>
  )
}