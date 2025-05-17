import React from 'react';
import user from "../../assets/images/user.png"

const Banner = () => {
    return (
        <div className='my-10'>
<div className="hero bg-base-200 rounded-2xl">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={user}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div className='mt-11 mb-32 mx-5'>
      <h1 className="text-5xl font-bold">One Step Closer To Your Dream Job</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;