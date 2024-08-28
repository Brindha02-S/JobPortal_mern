import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './postJob.css';

const Home = () => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      company: 'abcd',
      location: 'Noida',
      description: 'MERN Stack',
      salary: 800000,
    },
    {
      id: 2,
      company: 'wxyz',
      location: 'New Delhi',
      description: 'UX Design',
      salary: 700000,
    },
  ]);

  return (
    <div className="home-container">
      <h1>Job Search Portal</h1>
      <div className="job-list">
        {jobs.map((job) => (
          <div key={job.id} className="job-card">
            <h2>{job.description}</h2>
            <p>Company: {job.company}</p>
            <p>Location: {job.location}</p>
            <p>Salary: {job.salary}</p>
            <button>Apply</button>
          </div>
        ))}
      </div>
      <Link to="/postJob" className="post-Job-link">
        Post a Job
      </Link>
    </div>
  );
};

export default Home;
