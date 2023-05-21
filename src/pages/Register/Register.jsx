import { Player } from "@lottiefiles/react-lottie-player";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useSetTitle from "../../hooks/useSetTitle";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  useSetTitle("Register");

  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;

    console.log(name, email, password, photoURL);

    if (password.length < 6) {
      Swal.fire({
        title: "Error!",
        text: "Password must be 6 characters long",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        Swal.fire({
          title: "Congratulations!",
          text: "Account created successfully",
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

  return (
    <div className="mt-12 mb-24">
      <div className="hero py-12 bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-24">
          <div className="w-full">
            <Player
              autoplay
              loop
              src="https://assets4.lottiefiles.com/packages/lf20_pprxh53t.json"
              style={{ height: "350px", width: "350px" }}
            ></Player>
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-4xl font-bold mb-2">Registration now!</h1>
              <hr className=" mb-4" />

              <form onSubmit={handleRegistration}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                </div>

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

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="url"
                    name="photoURL"
                    placeholder="Photo URL"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Registration"
                    className="btn btn-primary"
                  />
                </div>
              </form>
              <Link to="/login" className="text-center">
                <button className="btn btn-link">
                  Already have an account ? Please Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
