import useSetTitle from "../../hooks/useSetTitle";

const Blogs = () => {
  useSetTitle("Blogs");
  return (
    <div className="container mx-auto mt-16 mb-24">
      <h2 className="text-center text-5xl mb-12 underline">
        Welcome to Our Blogs!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-base-200 p-10 md:p-16 lg:p-20 rounded-lg">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </h2>
            <div className="divider"></div>
            <p className="text-justify font-light" style={{ fontSize: "18px" }}>
              An access token is a credential that is used by a server to verify
              their users.Access token has short live or time period, when they
              are given by the server.
              <br />
              <br />
              On the other side, a refresh token is also a credential given by
              the server when authentication process is running. its has long
              live or time.
              <br />
              <br />
              We can store access token and refresh token on the client-side in
              <br />
              1. Http only cookie
              <br />
              2. local storage
              <br />
              3. session storage
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Compare SQL and NoSQL databases?</h2>
            <div className="divider"></div>
            <p className="text-justify font-light" style={{ fontSize: "18px" }}>
              SQL(Structured Query Language) and NoSQL(Not Only SQL) is two
              different type of database management system.
              <br />
              <br />
              Data Model: SQL database is Structure data into table format. on
              the other hand, NoSQL database is Structure their data into key
              value pair or document based.
              <br />
              <br />
              Language: SQL database use SQL Language for manipulating data.
              other side, NoSQL database have their own Query language or APIs
              to manipulate data.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">What is express js? What is Nest JS?</h2>
            <div className="divider"></div>
            <p className="text-justify font-light" style={{ fontSize: "18px" }}>
              Express js : Express js is a framework for Node.js. Node.js is a
              javascript runtime. express js is minimal and flexible framework
              for node.js. Express js by default provide us routing, middleware
              etc.
              <br />
              <br />
              Nest JS : Nest js also a node js framework. it built on top of
              express.js and inspired by angular.js and typescript.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              What is MongoDB aggregate and how does it work?
            </h2>
            <div className="divider"></div>
            <p className="text-justify font-light" style={{ fontSize: "18px" }}>
              Mongodb is a database system to store and manipulate data. In
              MongoDB, aggregate is a function that is used to advanced data
              operations and collections. It allow us to process and manipulate
              data in flexible and powerful way.
              <br />
              <br />
              The aggregate function takes an array of stages as its argument.
              which stage is refers to each operation. the stages are executed
              one by one in order and the one stage output become the next stage
              input.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
