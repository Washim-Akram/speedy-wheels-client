import { useLoaderData } from "react-router-dom";
import useSetTitle from "../../hooks/useSetTitle";

const ViewDetails = () => {
  const specificCar = useLoaderData();
  const {
    pictureURL,
    name,
    sellerName,
    sellerEmail,
    price,
    rating,
    quantity,
    description,
  } = specificCar;

  useSetTitle("View Details");

  return (
    <div className="container mx-auto mt-20 mb-32">
      <div className="bg-base-200 p-10 md:p-16">
        <img src={pictureURL} alt={name} className="h-[700px] w-full" />

        <h2 className="text-center text-3xl font-bold mt-6">{name}</h2>
        <h5 className="text-center text-2xl font-semibold">
          Seller Name : {sellerName}
        </h5>
        <h6 className="text-center text-xl font-medium">
          Seller Email : {sellerEmail}
        </h6>
        <p className="text-center text-xl font-medium">Price: ${price}</p>
        <p className="text-center text-xl font-medium">Ratings : {rating}</p>
        <p className="text-center text-xl font-medium">
          Available Quantity : {quantity}
        </p>
        <p className="text-center text-xl">Description : {description}</p>
      </div>
    </div>
  );
};

export default ViewDetails;
