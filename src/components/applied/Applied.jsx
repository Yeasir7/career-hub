import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobApplications } from '../../Utilitys/LocalStorage';

const Applied = () => {

    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(() => {
        const storedJobs = getStoredJobApplications();

        if(jobs.length > 0){
            const jobApplied = [];
            for(const id of storedJobs){
                const job = jobs.find(job => job.id === id)
                if(job){
                    jobApplied.push(job)
                }
            }

            setAppliedJobs(jobApplied);
        }
    },[jobs])

    return (
        <div>
            <h2>Applied : {appliedJobs.length}</h2>
        </div>
    );
};

export default Applied;