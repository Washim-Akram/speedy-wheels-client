import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Swal from "sweetalert2";

const ContactUs = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const handleContact = (event) => {
    event.preventDefault();
    Swal.fire({
      title: "Thanks!",
      text: "We are successfully received your message.",
      icon: "success",
      confirmButtonText: "Cool",
    });
    event.target.reset();
  };

  return (
    <div className="mt-60 mb-40">
      <div className="divider mb-8">
        <h2 className="text-center font-bold text-3xl md:text-4xl">
          Contact Us
        </h2>
      </div>
      <div className="hero py-20 bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <div data-aos="zoom-in-right" className="w-full ">
            <div>
              <h2 className="font-semibold text-3xl md:text-5xl">
                Feel Free to Contact Us.
              </h2>
              <h5 className="text-purple-600 font-medium">
                We always welcome your feedback
              </h5>
              <p className="text-justify mt-4 text-lg text-gray-600">
                We are Speedy Wheels Ltd. Best whole seller in bd in toy car
                marketplace. Since 2000, we provide continuos service for better
                experience to users. Our All product directly import from dubai,
                china, america etc. We believe in quality, not quantity. Its our
                family business. so, always we remember that and do our best
                with sincerity.
              </p>
            </div>
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div data-aos="zoom-in-left" className=" w-full">
            <form onSubmit={handleContact}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control mt-6">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>

              <textarea
                required
                name="message"
                placeholder="Your Messages"
                className="textarea textarea-bordered textarea-lg w-full mt-8"
              ></textarea>

              <div className="form-control mt-8">
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-active btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
