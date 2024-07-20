import { Carousel } from "antd";
import Button from '@mui/material/Button';

 
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const ProductCarousal = ({ products }) => (
  <Carousel autoplay>
    {products.map((product) => (
      <div key={product.id} className="w-[100%] h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] rounded-md shadow-2xl shadow-orange-500 flex justify-center items-center relative">
        <img
          src={product.image}
          alt=""
          className="w-[100%] h-[600px] m-auto rounded-xl "
        />
           <div className="absolute bottom-0 left-0 h-full w-full  bg-black backdrop-blur-3xl transition duration-300 ease-in-out hover:bg-black opacity-30"></div>
        <div className="absolute bottom-[50px] sm:bottom-[80x] left-2 sm:left-4 text-white flex gap-2 sm:gap-4 flex-col">
          <h1 className="text-3xl sm:text-5xl capitalize">{product.title}</h1>
          <p className="text-md  sm:text-xl  capitalize">{product.description}</p>
          <p className="text-3xl sm:text-5xl  ">${product.price}</p>
          <Button variant="contained">shop now</Button>
        </div>
      </div>
    ))}
  </Carousel>
);
export default ProductCarousal;
