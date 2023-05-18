import { Player } from "@lottiefiles/react-lottie-player";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <Player
        autoplay
        loop
        src="https://assets4.lottiefiles.com/packages/lf20_afwjhfb2.json"
        style={{ height: "350px", width: "350px" }}
      ></Player>

      <h2 className="text-3xl font-bold mb-4 text-slate-500">
        {status || 400}
      </h2>
      <p className="font-medium mb-4">
        <span className="text-red-600">{error.message}</span>
      </p>
      <Link to="/">
        <button className="btn btn-outline btn-primary">Back to Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
