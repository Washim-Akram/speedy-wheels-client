import { Player } from "@lottiefiles/react-lottie-player";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="mt-40">
      <h2 className="text-center font-bold text-3xl md:text-4xl mb-5">
        About Us
      </h2>
      <div className="hero py-20 bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <div data-aos="zoom-in-right" className="w-full">
            <Player
              autoplay
              loop
              src="https://assets9.lottiefiles.com/packages/lf20_v1yudlrx.json"
              //   style={{ height: "350px", width: "350px" }}
            ></Player>
          </div>

          <div data-aos="zoom-in-left" className="card w-full shadow-xl">
            <div className="card-body">
              <h5 className="text-red-600 uppercase">WHO WE ARE</h5>
              <h2 className="font-semibold text-3xl md:text-5xl">
                Thousand cars in one place.
              </h2>
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
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
