import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}
    >
      <h1>Sorry</h1>
      <p> The page is not currently available</p>
      <Link to="/">
        <button className="mt-3 rounded-4 btn btn-outline-warning">
          Back To HomePage
        </button>
      </Link>
    </div>
  );
};

export default PageNotFound;
