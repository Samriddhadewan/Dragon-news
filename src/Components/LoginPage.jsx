import { Link } from "react-router-dom"

const LoginPage = () => {
  return (
    <div className="min-h-[70vh] justify-center  items-center flex">
        <div className="card rounded-none bg-base-100 w-[50%] p-12">
            <h2 className="text-3xl pb-14 font-semibold text-center">Login to your account</h2>

            <hr className="text-[#E7E7E7]" />
      <form className="card-body">
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
        <div className="form-control mt-6">
          <button className="btn  w-full text-white border-none bg-[#403F3F]">Login</button>
        </div>
        <p className="text-center pt-3">Dont’t Have An Account ? <Link to={'/auth/register'} className="text-[#F75B5F]">Register</Link></p>
      </form>
    </div>
    </div>
  )
}

export default LoginPage