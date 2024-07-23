import { Link } from "react-router-dom";

const Signup = () => (
  <div className="flex bg-pink-200 w-full justify-center items-center">
    <div className=" shadow-md shadow-slate-400 h-[600px] md:h-[700px] w-full p-10 flex justify-center ">
      <div className=" sm:w-[500px] h-full  hidden md:block relative bg-bg bg-cover bg-no-repeat bg-center">
        {" "}
      </div>

      <form className=" w-[600px] h-full flex flex-col gap-2 sm:gap-4 px-4 bg-slate-200  rounded-md shadow-md shadow-slate-400 ">
        <h1 className="text-center text-3xl pt-4 uppercase font-bold">Signup</h1>
        <div className="flex flex-col gap-2 sm:gap-2 mt-5">
          <label
            htmlFor="username"
            className="text-xl sm:text-xl md:text-xl capitalize"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="enter usernam"
            className="p-2 rounded-md focus:bg-white bg-slate-100 border-2 border-pink-400  "
          />
        </div>
        <div className="flex flex-col gap-2 sm:gap-4">
          <label
            htmlFor="email"
            className="text-xl sm:text-xl md:text-xl capitalize"
          >
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="enter email"
            className="p-2 rounded-md focus:bg-white bg-slate-100 border-2 border-pink-400  "
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="password"
            className="text-xl sm:text-2xl md:text-xl capitalize"
          >
            Password
          </label>
          <input
            className="p-2 rounded-md focus:bg-white bg-slate-100 border-2 border-pink-400  "
            type="password"
            placeholder="enter password .."
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="role"
            className="text-xl sm:text-2xl md:text-xl capitalize"
          >
            Role
          </label>
          <select className="p-2 text-slate-800 capitalize rounded-md ">
            <option value="member" className="w-full bg-pink-300 default">member</option>
            <option value="admin"  className="w-full bg-pink-300 default">admin</option>
          </select>
        </div>
        <div className="text-center mt-4">
          <button className="bg-pink-400 px-4 py-2 rounded-md w-full text-xl text-slate-200 ">
            Submit
          </button>
        </div>
        <div className="flex justify-between items-center sm:mt-4">
          <span className="text-slate-800 text-md ">
              have an account ?{" "}
            <Link to="/signup" className="text-blue-900 font-semibold">
              {" "}
              login{" "}
            </Link>
          </span>
 
        </div>
      </form>
    </div>
  </div>
);

export default Signup;
