import { Link } from "react-router-dom";

function BrandCard(props) {
  return (
    <div className="flex flex-col justify-end relative  w-full  h-[200px] sm:h-[500px] p-2 py-4  rounded-lg bg-hero bg-cover bg-no-repeat">
      <div className="absolute bottom-0 left-0 h-full w-full bg-black backdrop-blur-sm transition duration-300 ease-in-out hover:bg-black opacity-30"></div>
      <div className="flex flex-col gap-4 justify-end text-white  absolute bottom-2 sm:bottom-8 mb-5 left-4">
        <h1 className="text-2xl capitalize sm:text-3xl md:text-5xl">{props.heading}</h1>
        <p className="text-white capitalize sm:text-xl md:text-2xl">{props.text}</p>
        <Link to="/" className="capitalize text-xl hover:text-blue-500">
          shop now
        </Link>
      </div>
    </div>
  );
}

export default BrandCard;
