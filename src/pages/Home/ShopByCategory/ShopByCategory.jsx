import { useState } from "react";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopByCategory = () => {
  const [categories, setCategories] = useState([]);

  const handleCategory = (category) => {
    fetch(`http://localhost:5000/cars/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  };

  return (
    <div className="container mx-auto mt-40 mb-40">
      <div className="divider mb-12">
        <h2 className="text-center text-2xl md:text-4xl">Shop By Category</h2>
      </div>
      <div>
        <Tabs>
          <TabList>
            <Tab onClick={() => handleCategory("regular")}>Regular Cars</Tab>
            <Tab onClick={() => handleCategory("sports")}>Sports Cars</Tab>
            <Tab onClick={() => handleCategory("truck")}>Truck</Tab>
          </TabList>

          <TabPanel>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {categories.map((category) => (
                <div
                  key={category._id}
                  className="card card-compact w-80 md:w-96 bg-base-100 shadow-xl"
                >
                  <figure>
                    <img src={category?.pictureURL} alt="Car Picture" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{category?.name}</h2>
                    <p className="font-medium">Price : ${category?.price}</p>
                    <p className="font-medium">Ratings : {category?.rating}</p>
                    <div className="card-actions justify-end">
                      <Link to={`/car/${category._id}`}>
                        <button className="btn btn-primary">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {categories.map((category) => (
                <div
                  key={category._id}
                  className="card card-compact w-80 md:w-96 bg-base-100 shadow-xl"
                >
                  <figure>
                    <img src={category?.pictureURL} alt="Car Picture" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{category?.name}</h2>
                    <p className="font-medium">Price : ${category?.price}</p>
                    <p className="font-medium">Ratings : {category?.rating}</p>
                    <div className="card-actions justify-end">
                      <Link to={`/car/${category._id}`}>
                        <button className="btn btn-primary">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {categories.map((category) => (
                <div
                  key={category._id}
                  className="card card-compact w-80 md:w-96 bg-base-100 shadow-xl"
                >
                  <figure>
                    <img src={category?.pictureURL} alt="Car Picture" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{category?.name}</h2>
                    <p className="font-medium">Price : ${category?.price}</p>
                    <p className="font-medium">Ratings : {category?.rating}</p>
                    <div className="card-actions justify-end">
                      <Link to={`/car/${category._id}`}>
                        <button className="btn btn-primary">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopByCategory;
