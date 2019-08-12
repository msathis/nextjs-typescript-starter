import React from "react";
import PropTypes from "prop-types";

import "./JobItem.css";

const propTypes = {
  job: PropTypes.shape({
    title: PropTypes.string.isRequired,
    company: PropTypes.shape({
      name: PropTypes.string.isRequired
    }),
    cities: PropTypes.array,
    remotes: PropTypes.array
  }),
  onClick: PropTypes.func,
  style: PropTypes.object
};
const defaultProps = {};

export default function JobItem({ job, style, onClick }) {
  return (
    <div className="Job" style={style} onClick={onClick}>
      <div>
        <div className="Title">{job.title}</div>
        <div className="Company">{job.company.name}</div>
      </div>
      <div className="JobFlags">
        <div className="Country">
          {job.cities.map(city => (
            <div key={city.name} className="Location">
              <span>{city.name}, </span>
              <span>{city.country.name}</span>
            </div>
          ))}
        </div>
        {job.remotes ? <div className="Flag">Remote</div> : null}
      </div>
    </div>
  );
}

JobItem.propTypes = propTypes;
JobItem.defaultProps = defaultProps;
