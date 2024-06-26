import React from 'react'
import UseTitle from './../../hook/UseTitle';

const ContactMe = () => {


const handleContact=(e)=>{

  e.preventDefault()
  const form =e.target;

const name=form.name.value;
const email=form.email.value;
const password=form.password.value;
const userInfo={
  name,email,password
}

console.log(userInfo)
}

  return (
<section id='contact ' className='border-t-2 '>
<div className=' lg:mt-10 ' data-aos="flip-left"
data-aos-easing="ease-out-cubic"
data-aos-duration="2000" >
<UseTitle heading={'CONTACT ME'}></UseTitle>

<form className="card-body  lg:w-[600px] mx-auto text-cen" onSubmit={handleContact}>
<div className="form-control text-center">
  <label className="label">
    <span className="text-center descFont text-red-500">Your Name</span>
  </label>
  <input name='name' type="name" placeholder="Your Name" className="input focus:border-red-500 text-white placeholder:text-red-300  placeholder:text-[14px] font-semibold " required />
</div>
<div className="form-control">
  <label className="label">
    <span className="label-text text-center descFont text-red-500">Your Email</span>
  </label>
  <input name='email' type="email" placeholder="Your Email" className="input focus:border-red-500 text-white placeholder:text-red-300  placeholder:text-[14px] font-semibold " required />
</div>
<div className="form-control">
  <label className="label">
    <span className="label-text text-center descFont text-red-500 ">Your Password</span>
  </label>
  <input name='password' type="password" placeholder="your password" className="input focus:border-red-500 text-white placeholder:text-red-300  placeholder:text-[14px] font-semibold " required />

</div>
<div className="form-control mt-6">
  <button className="btn btn-error text-white font-bold text-[18px] lg:text-xl">Submit</button>
</div>
</form>

</div>
</section>
  )
}

export default ContactMe
