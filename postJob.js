// If you want to keep the comment, make sure it is closed properly:
import React, { useState } from 'react';
import './postJob.css';

// Your component code here

const PostJob = ({ addJob }) => {
  const [job, setJob] = useState({
    company: '',
    location: '',
    description: '',
    salary: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob((prevJob) => ({
      ...prevJob,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addJob(job);
    setJob({
      company: '',
      location: '',
      description: '',
      salary: '',
    });
  };

  return (
    <div>
      <h2>Post a Job</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={job.company}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={job.location}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={job.description}
          onChange={handleChange}
        />
        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={job.salary}
          onChange={handleChange}
        />
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
};

export default PostJob;
