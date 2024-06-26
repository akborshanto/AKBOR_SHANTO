import React from 'react'
import UseTitle from './../../hook/UseTitle';

const ContactMe = () => {
  return (
    <div className=''>
<UseTitle heading={'CONTACT ME'}></UseTitle>

    <form className="card-body  lg:w-[600px] mx-auto">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Your Name</span>
      </label>
      <input type="name" placeholder="Your Name" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Your Email</span>
      </label>
      <input type="email" placeholder="Your Email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Your Password</span>
      </label>
      <input type="password" placeholder="your password" className="input input-bordered" required />

    </div>
    <div className="form-control mt-6">
      <button className="btn btn-error text-white font-bold text-[18px] lg:text-xl">Submit</button>
    </div>
  </form>

    </div>
  )
}

export default ContactMe
