import { Link, useLoaderData } from "react-router-dom";

const AllToys = () => {
  const cars = useLoaderData();
  console.log(cars);
  return (
    <div className="container mx-auto mt-20 mb-32">
      <div className="divider mb-12">
        <h2 className="text-center text-2xl md:text-4xl">All Toys!</h2>
      </div>
      <div className="bg-base-200 p-10 md:p-16">
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Seller</th>
                <th>Toy Name</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th>Available Quantity</th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car, index) => (
                <tr key={car._id} className="hover">
                  <th>{index + 1}</th>
                  <td>{car?.sellerName}</td>
                  <td>{car?.name}</td>
                  <td>{car?.category}</td>
                  <td>{car?.price}</td>
                  <td>{car?.quantity}</td>
                  <td>
                    <Link to={`/car/${car._id}`}>
                      <button className="btn">View Details</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
