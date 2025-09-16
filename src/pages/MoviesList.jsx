import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";

export const MoviesList = ({title ,apiPath }) => {
 
  const { data: movies } = useFetch(apiPath);
  

 useEffect(() => {

  document.title = title;
  }, [title]);

  const navigate = useNavigate();
  return (
    <div>
      <main className="container">
        {title === "your guide to great movies" ? (

          <div className="bg-body-tertiary p-5 border mb-5">
            <h3 className="text-primary ">
              Welcome to Moviehunt
            </h3>
            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione non iure voluptates qui ex eaque porro, fugit animi, dignissimos alias vero distinctio ipsam magni fugiat?

            </p>
            <button  className="btn btn-primary" onClick={() => {
              navigator ("/movies/upcoming");
            }}
            >
              Explore Now
            </button>
          </div>
        ) : (""
        )}
        <h5 className="text-danger py-2 border-bottom">
          {title}
        </h5>

        <div className="row row-cols-1  row-cols-md-2 row-cols-lg-3 g-3  py-2">

          {movies.map((movie) => {
            return <Card key={movie.id} movie={movie} />
          })}

          
          



        </div>

      </main>

    </div>
  )
};
