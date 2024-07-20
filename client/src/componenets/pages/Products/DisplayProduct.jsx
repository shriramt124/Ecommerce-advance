import ProductCarousal from "./ProductCarousal"
import { Carousel } from 'antd';
 
function DisplayProduct({products}) {
    if(!products.length){
        return <p>No Element Found</p>
    }
    return (
          <div>
            <ProductCarousal products={products}/>
          </div>
        
    )
}

export default DisplayProduct