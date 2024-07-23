 import Uploadui from "../components/UI/Uploadui"

 

function CreateProduct() {
  return (
    <div className="w-full bg-slate-200 flex flex-col gap-8 justify-center items-center ">
      <h1 className="text-3xl">Create product</h1>
      <form action="" className="flex flex-col gap-4 p-8">
         <div className="flex flex-col gap-2">
          <label htmlFor="title">title</label>
          <input className="p-2 rounded-md " type="text" placeholder="enter title" />
         </div>
         <div  className="flex flex-col gap-2">
          <label htmlFor="description">description</label>
          <textarea name="" id="" cols={50} rows={3} placeholder="Enter description"></textarea>
         </div>
         <div  className="flex flex-col gap-2">
          <label htmlFor="description">quantity</label>
          <input type="Number" placeholder="Quantity" />
         </div>
         <div  className="flex flex-col gap-2">
          <label htmlFor="category">category</label>
          <select name="category" id="category">
            <option value="fashion">fashion</option>
            <option value="winter">winter</option>
            <option value="accessories">accessories</option>
            <option value="footwear">footwear</option>
            <option value="cloths">clothes</option>
          </select>
         </div>
         <div className="bg-white rounded-md ">
         <Uploadui />
         </div>
      </form>
    </div>
  )
}

export default CreateProduct