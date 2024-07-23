import { Form, useLoaderData } from "react-router-dom";
import ImagePicker from "../components/UI/ImagePicker";
import { useSelector } from "react-redux";
import { useState } from "react";
import { getCurrentUser } from "../services/apihelper";

function Profile() {
  const userdata = useLoaderData();
  const [formdata, setFormdata] = useState({
    username: userdata.username,
    email: userdata.email,
    image: "",
    role: userdata.role,
  });
  function handlechangeImage(url) {
    setFormdata({
      ...formdata,
      image: url,
    });
  }
  function handleFormChange(e){
     setFormdata({
      ...formdata,
      [e.target.name]:e.targe.value
     })
  }
  console.log(userdata);
  return (
    <div className="-z-100 relative flex gap-4 justify-center p-8">
      <div className="-z-100 flex flex-col gap-4 w-5/6 md:w-4/6">
        <div className="flex justify-between items-center ">
          <h1 className="text-4xl capitalize">Personal Info</h1>
        </div>
        <div className="">
          <ImagePicker
            image={formdata.image}
            onChangeImage={handlechangeImage}
          />
        </div>
        <Form method="POST" className="flex flex-col gap-8 justify-center ">
          <div className="flex flex-col gap-2">
            <label
              className="text-xl capitalize sm:text-2xl "
              htmlFor="username"
            >
              username
            </label>
            <input
              className="p-2 border border-pink-400 rounded-md focus:bg-slate-200 capitalize"
              type="text"
              id="username"
              name="username"
              placeholder="username"
              value={formdata.username}
              onChange={handleFormChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xl capitalize sm:text-2xl " htmlFor="email">
              email
            </label>
            <input
              className="p-2 border border-pink-400 rounded-md focus:bg-slate-200 capitalize"
              type="email"
              id="email"
              name="email"
              placeholder="email"
              value={formdata.email}
              onChange={handleFormChange}
            />
          </div>
          {/*  <div className="flex flex-col gap-2">
            <label
              className="text-xl capitalize sm:text-2xl "
              htmlFor="password"
            >
              password
            </label>
            <input
              className="p-2 border border-pink-400 rounded-md focus:bg-slate-200 capitalize"
              type="password"
              id="password"
              name="password"
              placeholder="password"
            />
          </div> */}
          <div className="flex flex-col gap-2">
            <label
              className="text-xl capitalize sm:text-2xl "
              htmlFor="address"
            >
              address
            </label>
            <input
              className="p-2 border border-pink-400 rounded-md focus:bg-slate-200 capitalize"
              type="text"
              id="address"
              name="address"
              placeholder="address"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="text-xl capitalize sm:text-2xl "
              htmlFor="address"
            >
              role
            </label>
            <span>{formdata.role}</span>
          </div>
          <div className="flex gap-4 justify-between">
            <button className="bg-slate-400 py-2 px-4 rounded-md ">
              update account
            </button>
            <button className="border-2 border-pink-400 px-4 py-2 rounded-md hover:bg-slate-400">
              Logout
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export async function loader() {
  const res = await getCurrentUser();
  return res.data;
}

export function action({request}){
  const formdata = request.formData();
  const data = Object.fromEntries(formdata);
  console.log(data);
  return null;
}

export default Profile;
