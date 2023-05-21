import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useSetTitle from "../../hooks/useSetTitle";

const UpdateToy = () => {
  const specificCar = useLoaderData();
  const { _id, pictureURL, name, price, quantity, description } = specificCar;

  useSetTitle("Update Toy");

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    console.log(price, quantity, description);

    const updatedCar = {
      price,
      quantity,
      description,
    };
    fetch(`https://speedy-wheels-server-three.vercel.app/cars/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCar),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Car Updated Successfully.",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="container mx-auto mt-20 mb-32">
      <div className="divider mb-12">
        <h2 className="text-center text-2xl md:text-4xl">Update Toy!</h2>
      </div>
      <div className="hero py-12 bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-24">
          <div className="w-full">
            <img src={pictureURL} alt={name} />
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-4xl font-bold mb-2">Update now!</h1>
              <hr className=" mb-4" />

              <form onSubmit={handleUpdate}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="number"
                    name="price"
                    defaultValue={price}
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Available Quantity</span>
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    defaultValue={quantity}
                    className="input input-bordered"
                  />
                </div>

                <textarea
                  required
                  name="description"
                  defaultValue={description}
                  className="textarea textarea-bordered textarea-lg w-full mt-8"
                ></textarea>

                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Update"
                    className="btn btn-primary"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateToy;
