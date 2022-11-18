import { useNavigate } from "react-router-dom";

export default function Notfound404() {
  const navigate = useNavigate();
  return (
    <>
      <div className="col-6 mx-auto">
        <h2 className="text-center py-5">Guess there is a problem :(</h2>
        <p className="text-center">
          We couldn't find the word or the page you are looking for.
        </p>
        <p className="text-gray-500 text-center">Error Code: 404</p>
      </div>
      <div className="d-flex justify-center">
        <button
          className="returnBtn"
          onClick={() => {
            navigate("/");
          }}
        >
          Return to Main Page
        </button>
      </div>
    </>
  );
}
