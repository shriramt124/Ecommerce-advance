 

function Profile() {
  return (
    <div className="-z-100 relative flex gap-4 justify-center p-8">
       <div className="md:flex hidden flex-col gap-8 w-1/6">
        <h1>Profile Management</h1>
        <div className="flex flex-col gap-4">
         <span>Personal Info</span>
         <span>Cart</span>
         <span>product Product</span>
         <span>AllUsers</span>
         <span>Logout</span>

        </div>
       </div>
       <div>
        
       </div>
       <div className="flex flex-col gap-4 w-5/6 md:w-4/6">
       <div className="flex justify-between items-center ">
        <h1 className="text-4xl capitalize">Personal Info</h1>
       
        </div>
        <div className="relative">
        <img className="w-[100px] border-2 border-red-200 rounded-full" src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?t=st=1721665827~exp=1721669427~hmac=130161ac0cda96c4e1558c0ac20658f03991a1fbea742d387b63256b45a0a58e&w=740" alt="" />
         
        </div>
        <form action="" className="flex flex-col gap-8 justify-center ">
          <div className="flex flex-col gap-2">

         
          <label className="text-xl capitalize sm:text-2xl " htmlFor="username">username</label>
          <input className="p-2 border border-pink-400 rounded-md focus:bg-slate-200 capitalize" type="text" id="username" name="username" placeholder="username" />
           </div>
           <div className="flex flex-col gap-2">
            <label className="text-xl capitalize sm:text-2xl " htmlFor="email">email</label>
            <input className="p-2 border border-pink-400 rounded-md focus:bg-slate-200 capitalize" type="email" id="email" name="email" placeholder="email" />

           </div>
           <div className="flex flex-col gap-2">
            <label className="text-xl capitalize sm:text-2xl " htmlFor="password">password</label>
            <input className="p-2 border border-pink-400 rounded-md focus:bg-slate-200 capitalize" type="password" id="password" name="password" placeholder="password" />
           </div>
           <div className="flex flex-col gap-2">
            <label className="text-xl capitalize sm:text-2xl " htmlFor="address">address</label>
            <input className="p-2 border border-pink-400 rounded-md focus:bg-slate-200 capitalize" type="text" id="address" name="address" placeholder="address" />

           </div>
           <div className="flex flex-col gap-2">
            <label className="text-xl capitalize sm:text-2xl " htmlFor="address">role</label>
           <span>member</span>

           </div>
          <div className="flex gap-4 justify-between">
            <button className="bg-slate-400 py-2 px-4 rounded-md ">update account</button>
            <button className="border-2 border-pink-400 px-4 py-2 rounded-md hover:bg-slate-400">Logout</button>
          </div>
        </form>
       </div>
    </div>
  )
}

export default Profile