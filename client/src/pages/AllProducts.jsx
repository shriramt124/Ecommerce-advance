import { products } from "../data.js"
 
import CardProductUi from "../components/UI/CardProductUi.jsx";

function AllProducts() {
  console.log(products);
  return (
    <div className="mt-4 flex flex-col justify-center ">
      <h1 className="text-center text-3xl sm:text-5xl capitalize">Products</h1>
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-x-4">
       
      {
        products.map((product) => (
         <CardProductUi key={product.id} product={product}/>
        ))
      }
    </div>
    </div>
  )
}

export default AllProducts