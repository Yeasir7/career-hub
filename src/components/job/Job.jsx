import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Job = ({job}) => {

    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;


    return (
        <div>
<div className="card card-compact bg-base-100 shadow-xl p-8">
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
    <div className='flex gap-4 mb-7' >
      <h2 className='flex gap-2 items-center justify-center'>
        <CiLocationOn />
        {location}
      </h2>
      <h2 className='flex gap-2 items-center justify-center'>
        <CiDollar />
        {salary}
      </h2>
    </div>
    <div className="card-actions">
      <Link to={`/details/${id}`}><button className="btn btn-primary">View Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Job;