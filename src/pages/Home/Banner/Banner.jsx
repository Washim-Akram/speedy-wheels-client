const Banner = () => {
  return (
    <div className="mt-20 container mx-auto">
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://images.pexels.com/photos/2527931/pexels-photo-2527931.jpeg?auto=compress&cs=tinysrgb&w=1600"
            className="w-full h-[600px]"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://images.pexels.com/photos/574519/pexels-photo-574519.jpeg?auto=compress&cs=tinysrgb&w=1600"
            className="w-full h-[600px]"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://images.pexels.com/photos/97353/pexels-photo-97353.jpeg?auto=compress&cs=tinysrgb&w=1600"
            className="w-full h-[600px]"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://images.pexels.com/photos/92615/pexels-photo-92615.jpeg?auto=compress&cs=tinysrgb&w=1600"
            className="w-full h-[600px]"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;
