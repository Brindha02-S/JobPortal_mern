import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home.js';
import PostJob from './postJob.js';
import './App.css';

const App = () => {
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

  const addJob = (job) => {
    const newJob = { ...job, id: jobs.length + 1 };
    setJobs([...jobs, newJob]);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home jobs={jobs} />} />
          <Route path="/postJob" element={<PostJob addJob={addJob} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
