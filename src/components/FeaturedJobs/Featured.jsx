import React, { useEffect, useState } from 'react';
import Job from '../job/Job';

const Featured = () => {
    const [jobs, setJobs] = useState([]);


    const [jobLength, SetJobLength] = useState(4);

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
                    jobs.slice(0, jobLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={jobLength === jobs.length ?'hidden':'text-center'}>
            <button onClick={() => SetJobLength(jobs.length)} class="btn btn-primary mt-9">See all jobs</button>
            </div>
        </div>
    );
};

export default Featured;