import { Link } from "react-router-dom";
import notfound from "../assets/notfound.jpg";

export const PageNotFound = () => {
  return (
    <div className="container">
      <img src={notfound} alt="Page Not Found" className="img-fluid mx-auto d-block mb-4"  style={{maxWidth:"600px",width:"100%"}}/>

      <p className="text-center">
        <Link to="/" className="btn btn-danger">

        Goto Home Page
        
        
        </Link>
      </p>
    </div>
  );
};