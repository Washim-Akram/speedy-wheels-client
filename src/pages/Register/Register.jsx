import { Player } from "@lottiefiles/react-lottie-player";

const Register = () => {
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

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
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
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Registration</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
