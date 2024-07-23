import { Link } from "react-router-dom";
 
const Login = () => {
  return (
    <div className="flex bg-pink-200 w-full justify-center items-center">
      <div className=" shadow-md shadow-slate-400 h-[600px] md:h-[700px] w-full p-10 flex justify-center ">
        <div className=" sm:w-[500px] h-full  hidden md:block relative bg-bg bg-cover bg-no-repeat bg-center">
          {" "}
        </div>

        <Form
          method="POST"
          className=" w-[600px] h-full flex flex-col gap-8 sm:gap-8 px-4 bg-slate-200  rounded-md shadow-md shadow-slate-400 "
        >
          <h1 className="text-center text-3xl pt-4 uppercase font-bold">
            login
          </h1>
          <div className="flex flex-col gap-2 sm:gap-4 mt-10">
            <label
              htmlFor="username"
              className="text-xl sm:text-2xl md:text-3xl capitalize"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="enter username or email"
              className="p-2 rounded-md focus:bg-white bg-slate-100 border-2 border-pink-400  "
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-xl sm:text-2xl md:text-3xl capitalize"
            >
              Password
            </label>
            <input
              className="p-2 rounded-md focus:bg-white bg-slate-100 border-2 border-pink-400  "
              type="password"
              placeholder="enter password .."
            />
          </div>
          <div className="text-center">
            <button className="bg-pink-400 px-4 py-2 rounded-md w-full text-xl text-slate-200 ">
              Submit
            </button>
          </div>
          <div className="flex justify-between items-center sm:mt-4">
            <span className="text-slate-800 text-md ">
              Don't have an account ?{" "}
              <Link to="/signup" className="text-blue-900 font-semibold">
                {" "}
                signup{" "}
              </Link>
            </span>
            <span className="text-md text-blue-950 font-bold">Admin</span>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;