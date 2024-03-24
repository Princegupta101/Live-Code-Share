import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";

import socketStatus from "../../utils/socketStatus";

function Loading({ status }) {
  const location = useLocation();
  const username = location?.state?.username || "";

  return (
    <div className="flex h-screen min-h-screen flex-col items-center justify-center gap-6 px-4 text-center bg-gray-100">
      {status === socketStatus.CONNECTING ? (
        <ConnectingStatus username={username} />
      ) : (
        <ConnectionErrorOptions />
      )}
    </div>
  );
}

Loading.propTypes = {
  status: PropTypes.string.isRequired,
};

const ConnectingStatus = ({ username }) => {
  return (
    <>
      <div className="flex items-center justify-center space-x-2">
        <div className="h-4 w-4 animate-bounce rounded-full bg-blue-500 [animation-delay:-0.3s]"></div>
        <div className="h-4 w-4 animate-bounce rounded-full bg-blue-500 [animation-delay:-0.15s]"></div>
        <div className="h-4 w-4 animate-bounce rounded-full bg-blue-500"></div>
      </div>
      <span className="block mt-4 text-lg font-medium text-gray-700">
        Joining the room as <span className="font-bold">{username}</span>...
        <br /> If it takes too long, please refresh the page.
      </span>
    </>
  );
};

ConnectingStatus.propTypes = {
  username: PropTypes.string.isRequired,
};

const ConnectionErrorOptions = () => {
  const navigate = useNavigate();

  const reloadPage = () => {
    window.location.reload();
  };

  const gotoHomePage = () => {
    navigate("/");
  };

  return (
    <>
      <span className="block mt-4 text-lg font-medium text-gray-700">
        Oops! Something went wrong. Please try again.
      </span>
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <button
          className="rounded-md bg-blue-500 px-8 py-2 font-bold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={reloadPage}
        >
          Try Again
        </button>
        <button
          className="rounded-md bg-blue-500 px-8 py-2 font-bold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={gotoHomePage}
        >
          Go to HomePage
        </button>
      </div>
    </>
  );
};

export default Loading;
