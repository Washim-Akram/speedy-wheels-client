import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Gallery = () => {
  const images = [
    {
      original:
        "https://images.pexels.com/photos/97353/pexels-photo-97353.jpeg?auto=compress&cs=tinysrgb&w=1600",
      thumbnail:
        "https://images.pexels.com/photos/97353/pexels-photo-97353.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      original:
        "https://images.pexels.com/photos/102977/pexels-photo-102977.jpeg?auto=compress&cs=tinysrgb&w=1600",
      thumbnail:
        "https://images.pexels.com/photos/102977/pexels-photo-102977.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      original:
        "https://images.pexels.com/photos/35619/capri-ford-oldtimer-automotive.jpg?auto=compress&cs=tinysrgb&w=1600",
      thumbnail:
        "https://images.pexels.com/photos/35619/capri-ford-oldtimer-automotive.jpg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      original:
        "https://images.pexels.com/photos/50697/messerschmitt-kr200-classic-car-oldtimer-automobile-50697.jpeg?auto=compress&cs=tinysrgb&w=1600",
      thumbnail:
        "https://images.pexels.com/photos/50697/messerschmitt-kr200-classic-car-oldtimer-automobile-50697.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      original:
        "https://images.pexels.com/photos/9254635/pexels-photo-9254635.jpeg?auto=compress&cs=tinysrgb&w=1600",
      thumbnail:
        "https://images.pexels.com/photos/9254635/pexels-photo-9254635.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      original:
        "https://images.pexels.com/photos/5156805/pexels-photo-5156805.jpeg?auto=compress&cs=tinysrgb&w=1600",
      thumbnail:
        "https://images.pexels.com/photos/5156805/pexels-photo-5156805.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      original:
        "https://images.pexels.com/photos/6779864/pexels-photo-6779864.jpeg?auto=compress&cs=tinysrgb&w=1600",
      thumbnail:
        "https://images.pexels.com/photos/6779864/pexels-photo-6779864.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      original:
        "https://images.pexels.com/photos/5190159/pexels-photo-5190159.jpeg?auto=compress&cs=tinysrgb&w=1600",
      thumbnail:
        "https://images.pexels.com/photos/5190159/pexels-photo-5190159.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      original:
        "https://images.pexels.com/photos/6642328/pexels-photo-6642328.jpeg?auto=compress&cs=tinysrgb&w=1600",
      thumbnail:
        "https://images.pexels.com/photos/6642328/pexels-photo-6642328.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      original:
        "https://images.pexels.com/photos/13047784/pexels-photo-13047784.jpeg?auto=compress&cs=tinysrgb&w=1600",
      thumbnail:
        "https://images.pexels.com/photos/13047784/pexels-photo-13047784.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  const renderItem = (item) => {
    const imageStyle = {
      height: "700px",
      width: "100%",
    };

    return (
      <div>
        <img src={item.original} style={imageStyle} />
      </div>
    );
  };

  const renderThumbInner = (item) => {
    const thumbnailStyle = {
      height: "70px",
      //   width: "250px",
    };

    return (
      <div>
        <img src={item.thumbnail} style={thumbnailStyle} />
      </div>
    );
  };

  return (
    <div className="container mx-auto mt-40">
      <div className="divider mb-12">
        <h2 className="text-center text-2xl md:text-4xl">
          Our Awesome Gallery!
        </h2>
      </div>
      <ImageGallery
        items={images}
        showIndex={true}
        showBullets={true}
        renderItem={renderItem}
        renderThumbInner={renderThumbInner}
      />
      ;
    </div>
  );
};

export default Gallery;
