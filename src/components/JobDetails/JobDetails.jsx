import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const JobDetails = () => {
    const jobs = useLoaderData();
    const {userId} = useParams();
    const job = jobs.find(job => parseInt(userId) === job.id)
    const notify = () =>{
        toast("You have applied successfully")
    }
    return (
        <div className='my-32'>
            <h1 className='mb-6'><span className='font-extrabold text-base'>Job Description:</span> {job.job_description}</h1>
            <h1><span className='font-extrabold text-base'>Job Responsibility:</span>{job.job_responsibility}</h1>
            <h1 className='my-6'><span className='font-extrabold text-base'>educational requirements:</span><br /><br />{job.educational_requirements}</h1>
            <h1 className='mb-6'><span className='font-extrabold text-base'>experiences:</span><br /><br />{job.experiences}</h1>
            <div className='flex items-center justify-center'>
               <button onClick={notify} className="btn btn-wide bg-[#9873FF] text-white">Apply Now</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;