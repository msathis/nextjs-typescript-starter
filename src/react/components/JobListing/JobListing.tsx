import React from "react";
import PropTypes from "prop-types";

import "./JobListing.css";
import JobItem from "../JobItem/JobItem";

const propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      company: PropTypes.shape({
        name: PropTypes.string.isRequired
      }),
      cities: PropTypes.array,
      remotes: PropTypes.array
    })
  ),
  onSelect: PropTypes.func.isRequired
};
const defaultProps = {};

export default function JobListing({ jobs, onSelect }) {
  return (
    <div className="Job-Listing">
      {jobs.map(job => (
        <JobItem
          style={{ cursor: "pointer" }}
          onClick={() => onSelect(job)}
          job={job}
          key={job.id}
        />
      ))}
    </div>
  );
}

JobListing.propTypes = propTypes;
JobListing.defaultProps = defaultProps;
