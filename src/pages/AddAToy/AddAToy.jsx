import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const AddAToy = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const { user } = useContext(AuthContext);
  console.log(user);

  const handleAddAToy = (event) => {
    event.preventDefault();
    const form = event.target;

    const pictureURL = form.pictureURL.value;
    const name = form.name.value;
    const sellerName = user?.displayName;
    const sellerEmail = user?.email;
    const category = selectedCategory;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    console.log(
      pictureURL,
      name,
      sellerName,
      sellerEmail,
      category,
      price,
      rating,
      quantity,
      description
    );

    const car = {
      pictureURL,
      name,
      sellerName,
      sellerEmail,
      category,
      price,
      rating,
      quantity,
      description,
    };

    fetch("http://localhost:5000/cars", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(car),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Car Added Successfully.",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="container mx-auto mt-20 mb-32">
      <div className="divider mb-12">
        <h2 className="text-center text-2xl md:text-4xl">Add a Toy!</h2>
      </div>
      <div className="bg-base-200 p-10 md:p-16">
        <form onSubmit={handleAddAToy}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Picture URL</span>
              </label>
              <input
                required
                type="url"
                name="pictureURL"
                placeholder="Picture URL"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                required
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                required
                type="text"
                name="sellerName"
                defaultValue={user?.displayName}
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Email</span>
              </label>
              <input
                required
                type="email"
                name="sellerEmail"
                defaultValue={user?.email}
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Choose Category</span>
              </label>
              <select
                required
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="input input-bordered"
              >
                <option></option>
                <option value="regular">regular</option>
                <option value="sports">sports</option>
                <option value="truck">truck</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                required
                type="number"
                name="price"
                placeholder="Price"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                required
                type="number"
                name="rating"
                placeholder="Rating"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <input
                required
                type="number"
                name="quantity"
                placeholder="Available Quantity"
                className="input input-bordered"
              />
            </div>
          </div>
          <textarea
            required
            name="description"
            placeholder="Detail Description"
            className="textarea textarea-bordered textarea-lg w-full mt-8"
          ></textarea>

          <div className="form-control mt-8">
            <input
              type="submit"
              value="Add this toy"
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAToy;
