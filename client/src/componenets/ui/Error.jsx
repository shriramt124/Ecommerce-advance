import { useRouteError } from 'react-router-dom';
 import { Link } from 'react-router-dom';

function Errorui() {
 
  const error = useRouteError()
 
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      
      <Link to="/" >&larr; Go back</Link>
      
    </div>
  );
}

export default Errorui;