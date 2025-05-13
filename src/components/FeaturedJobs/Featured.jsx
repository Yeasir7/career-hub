import React, { useEffect, useState } from 'react';
import Job from '../job/Job';

const Featured = () => {
    const [jobs, setJobs] = useState([]);

    useEffect( () => {
        fetch("jobs.json")
        .then(res => res.json())
        .then(data => setJobs(data));
    },[])
    return (
        <div className='my-28'>
            <div className='text-center'>
            <h1 className="text-5xl">Featured Jobs : {jobs.length}</h1>
            <p className='my-6'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            {/* cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    jobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default Featured;