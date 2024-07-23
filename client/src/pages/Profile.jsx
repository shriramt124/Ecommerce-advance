import { Form, useLoaderData, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { getCurrentUser, updateProfile } from "../services/apihelper";

function Profile() {
  const userdata = useLoaderData();
  const [image, setImage] = useState(userdata.photo || null);
  const [formdata, setFormdata] = useState({
    username: userdata.username,
    email: userdata.email,
    image: userdata.photo,
    role: userdata.role,
  });
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  function handleFormChange(e) {
    const { name, value, files } = e.target;
    if (name === "image" && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setFormdata({
          ...formdata,
          image: file,
        });
      };
      reader.readAsDataURL(file);
    } else {
      setFormdata({
        ...formdata,
        [name]: value,
      });
    }
  }

  function handleImageClick() {
    fileInputRef.current.click(); // Trigger the file input click event
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    for (const key in formdata) {
      formData.append(key, formdata[key]);
    }

    try {
      const response = await updateProfile(formData);
      console.log('Success:', response);
      navigate("/profile"); // Navigate to a success page or display a success message
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div className="-z-100 relative flex gap-4 justify-center p-8">
      <div className="-z-100 flex flex-col gap-4 w-5/6 md:w-4/6">
        <div className="flex justify-between items-center ">
          <h1 className="text-4xl capitalize">Personal Info</h1>
        </div>
        
        <Form method="post" encType="multipart/form-data" className="flex flex-col gap-8 justify-center " onSubmit={handleSubmit}>
          <div className="relative flex flex-col items-start">
            <div
              className="relative cursor-pointer"
              onClick={handleImageClick} // Click to trigger file input
            >
              {image ? (
                <img src={image} alt="Profile" className="w-32 h-32 object-cover rounded-full" />
              ) : (
                <div className="w-32 h-32 flex justify-center items-center border border-dashed border-pink-400 rounded-full">
                  <span className="text-2xl">+</span>
                </div>
              )}
            </div>
            <input
              type="file"
              name="image"
              className="hidden" // Hide the file input
              ref={fileInputRef}
              onChange={handleFormChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xl capitalize sm:text-2xl " htmlFor="username">
              Username
            </label>
            <input
              className="p-2 border border-pink-400 rounded-md focus:bg-slate-200 capitalize"
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={formdata.username}
              onChange={handleFormChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xl capitalize sm:text-2xl " htmlFor="email">
              Email
            </label>
            <input
              className="p-2 border border-pink-400 rounded-md focus:bg-slate-200 capitalize"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formdata.email}
              onChange={handleFormChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xl capitalize sm:text-2xl " htmlFor="address">
              Address
            </label>
            <input
              className="p-2 border border-pink-400 rounded-md focus:bg-slate-200 capitalize"
              type="text"
              id="address"
              name="address"
              placeholder="Address"
              onChange={handleFormChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xl capitalize sm:text-2xl " htmlFor="role">
              Role
            </label>
            <span>{formdata.role}</span>
          </div>
          <div className="flex gap-4 justify-between">
            <button className="bg-slate-400 py-2 px-4 rounded-md">
              Update Account
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

export default Profile;
