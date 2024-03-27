
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>The page does not exist.</p>
      <Link to="/home">
        <button id="backToHomeButton" className="bg-green-700 text-white py-3 px-5 mb-4 rounded-lg hover:bg-green-600">Go to Homepage</button>
      </Link>
    </div>
  );
};

export default Notfound;