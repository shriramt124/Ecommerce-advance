import React from 'react'
const products = [
    {
        title:"title",
        price:888,
        id:1,
        quantity:1

    },
    {
        title:"title",
        price:888,
        id:2,
        quantity:2

    },
    {
        title:"title",
        price:888,
        id:3,
        quantity:3

    }
]
function AdminAllProduct() {
  return (
    <div className='flex flex-col gap-4 text-center p-2 sm:p-8 bg-slate-200'>
        <h1>all products</h1>
        <div className='flex flex-col gap-4 justify-center items-center w-full '>
            {products.map((product)=>(
               <div key={product.id} className='w-full bg-white flex justify-between p-2 rounded-md '>
                <div>{product.title}</div>
                <div>${product.price}</div>
                <div><span>+</span>{product.quantity} <span>-</span></div>
                <div className='flex gap-4 capitalize'>
                    <button>delete</button>
                    <button>update</button>
                </div>
               </div>

            ))}
        </div>

    </div>
  )
}

export default AdminAllProduct