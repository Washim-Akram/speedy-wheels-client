import { Player } from "@lottiefiles/react-lottie-player";
import { useContext } from "react";
// import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { login, signInWithGoogle } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        Swal.fire({
          title: "Congratulations!",
          text: "Login successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
        form.reset();
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        Swal.fire({
          title: "Error!",
          text: `${errorMessage}`,
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        Swal.fire({
          title: "Error!",
          text: `${errorMessage}`,
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <div className="mt-12 mb-24">
      <div className="hero py-12 bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-24">
          <div className="w-full">
            <Player
              autoplay
              loop
              src="https://assets4.lottiefiles.com/packages/lf20_UW8DlCRljO.json"
              style={{ height: "350px", width: "350px" }}
            ></Player>
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-4xl font-bold mb-2">Login now!</h1>
              <hr className=" mb-4" />

              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    required
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Login"
                    className="btn btn-primary"
                  />
                </div>
              </form>
              <hr className="my-4 border" />
              {/* <button className="btn bg-red-500">
                <FaGoogle /> Login With Google
              </button> */}
              <button onClick={handleGoogleSignIn}>
                <img
                  src="https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png"
                  alt="Sign in with Google"
                />
              </button>

              <Link to="/register" className="text-center">
                <button className="btn btn-link">
                  New User ? Please Registration
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
