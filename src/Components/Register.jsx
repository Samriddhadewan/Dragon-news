import { Link } from "react-router-dom"

const Register = () => {
  return (
<div className="min-h-[70vh] justify-center  items-center flex">
        <div className="card rounded-none bg-base-100 w-[50%] p-12">
            <h2 className="text-3xl pb-14 font-semibold text-center">Register your account</h2>

            <hr className="text-[#E7E7E7]" />
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-[#403F3F] font-bold my-3 text-base">Name</span>
          </label><br />
          <input type="email" placeholder="Enter Name" className="input input-bordered w-full" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-[#403F3F] font-bold my-3 text-base">Photo URL</span>
          </label><br />
          <input type="email" placeholder="Enter Phot URL" className="input input-bordered w-full" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-[#403F3F] font-bold my-3 text-base">Email address</span>
          </label><br />
          <input type="email" placeholder="Enter Email Address" className="input input-bordered w-full" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-[#403F3F] font-bold my-3 ">Password</span>
          </label>
          <br />
          <input type="password" placeholder="Enter Password" className="w-full input input-bordered" required /> <br />
        </div>

        <div className="form-control">
  <label className="label cursor-pointer">
  <input type="checkbox"  className="checkbox" />
    <span className="label-text">Accept Term & Conditions</span>
  </label>
</div>
        <div className="form-control mt-2">
          <button className="btn  w-full text-white border-none bg-[#403F3F]">Register</button>
        </div>
        <p className="text-center pt-3">All ready Have An Account ? <Link to={'/auth/login'} className="text-[#F75B5F]">Log in</Link></p>
      </form>
    </div>
    </div>
  )
}

export default Register