import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myCars, setMyCars] = useState([]);

  const url = `http://localhost:5000/my-cars?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyCars(data);
      });
  }, [url]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cars/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your preferred car has been deleted.",
                "success"
              );
              const remaining = myCars.filter((myCar) => myCar._id !== _id);
              setMyCars(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="container mx-auto mt-20 mb-32">
      <div className="divider mb-12">
        <h2 className="text-center text-2xl md:text-4xl">My Toys!</h2>
      </div>
      <div className="bg-base-200 p-10 md:p-16">
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name & Picture</th>
                <th>Seller</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {myCars.map((car, index) => (
                <tr key={car._id} className="hover">
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={car?.pictureURL} alt={car?.name} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{car?.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {car?.sellerName}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {car?.sellerEmail}
                    </span>
                  </td>
                  <td>{car?.category}</td>
                  <td>${car?.price}</td>
                  <td>{car?.rating}</td>
                  <td>{car?.quantity}</td>
                  <td>
                    <Link to={`/update/${car._id}`}>
                      <button className="btn">Update</button>
                    </Link>
                  </td>

                  <td>
                    <button
                      onClick={() => handleDelete(car._id)}
                      className="btn btn-error"
                    >
                      Delete
                    </button>
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

export default MyToys;
