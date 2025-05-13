import React from 'react';

const Job = ({job}) => {
    const {logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div>
<div className="card card-compact bg-base-100 shadow-xl">
  <div>
      <img
      src={logo}
      alt="Shoes" className='w-[116px]'/>
  </div>
  <div className="">
    <h2 className="card-title mt-8 mb-3">{job_title}</h2>
    <p>{company_name}</p>
    <div className='flex gap-3 my-6'>
      <button className='px-5 py-2 border-2 rounded-lg'>{remote_or_onsite}</button>
      <button className='px-5 py-2 border-2 rounded-lg'>{job_type}</button>
    </div>
    <div className="card-actions">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Job;