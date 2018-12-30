import React from 'react';
import './Jobs.css';


export default ({ jobs }) => {


  const list = () => {
    return jobs.map((job) => {
      return (
        <div key={job.id} className="col s12 m12">
          <div className="card">
            <div className="card-content">
              <span className="card-title">
                <div className="job-title">
                  <strong>{job.role}</strong>
                  <p>{job.organizations[0].name}</p>
                </div>
              </span>
              <p>{job.additionalInfo}</p>
            </div>
            <div className="card-action">
              <div className="job-duration">
                <div>
                  <p>from <strong>{job.fromMonth} {job.fromYear}</strong></p>
                </div>
                <div>
                  {job.toMonth ? <p>to <strong>{job.toMonth} {job.toYear}</strong></p> : <p><strong>Current</strong></p>}
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
      <h5>Jobs</h5>
      <div className="row">
        {list()}
      </div>
    </div>

  )
}