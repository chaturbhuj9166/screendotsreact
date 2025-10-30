import React, { useState } from 'react'
import "./Web.css"

const cities = [
  { id: 1, name: "jaipur" },
  { id: 2, name: "kota" },
  { id: 3, name: "ajmer" },
  { id: 4, name: "ahmedabad" },
  { id: 5, name: "delhi" },
  { id: 6, name: "mumbai" },
  { id: 7, name: "jodhpur" },
];

const rules = [
  {
    element: "name",
    rule: {
      required: true,
      minLength: 3,
      maxLength: 30,
      regex: /[a-zA-Z ]+/,
    },
  },
  {
    element: "phone",
    rule: {
      required: true,
      minLength: 10,
      maxLength: 10,
      regex: /[0-9]+/,
    },
  },
  {
    element: "email",
    rule: {
      required: true,
      regex: /[a-zA-Z0-9\.\-\_]+@[0-9a-zA-Z]+.[a-zA-Z]{2,5}/,
    },
  },
  {
    element: "hometown",
    rule: {
      required: true,
    },
  },
  {
    element: "gender",
    rule: {
      required: true,
    },
  },
  {
    element: "address",
    rule: {
      required: true,
      minLength: 10,
    },
  },
];


const Webmain = () => {
  //   const [name, setName] = useState("");
  //   const [phone, setPhone] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [hometown, setHometown] = useState("");
  //   const [address, setAddress] = useState("");

  const [isSubmitting, setIssubmitting] = useState(false);

  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    hometown: "",
    address: "",
    gender: "",
  });

  const [error, setError] = useState({
    name: "",
    phone: "",
    email: "",
    hometown: "",
    address: "",
    gender: "",
  });

  function handleChange(e) {
    // if (e.target.name === "name") {
    //   setData({ ...data, name: e.target.value });
    // } else if (e.target.name === "phone")
    //   setData({ ...data, phone: e.target.value });
    // else if (e.target.name === "email")
    //   setData({ ...data, email: e.target.value });
    // else if (e.target.name === "gender")
    //   setData({ ...data, gender: e.target.value });
    // else if (e.target.name === "address")
    //   setData({ ...data, address: e.target.value });
    // else if (e.target.name === "hometown")
    //   setData({ ...data, hometown: e.target.value });

    // const name = e.target.name;
    // const value = e.target.value;
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIssubmitting(true);

     const newError ={ 
    name: "",
    phone: "",
    email: "",
    hometown: "",
    address: "",
    gender: "",
   };

    rules.forEach((obj) => {

      console.log(obj);

      if (data[obj.element] !== null) {
        const formElem = data[obj.element];
        if (obj.rule.required) {
          if (formElem.length === 0) {
            newError({ ...error, [obj.element]: "This field is required" });
            return;
          }
        }

        if (obj.rule.minLength) {
          if (formElem.length < obj.rule.minLength)
            newError({
              ...error,
              [obj.element]:
                "The minimum input should be " +
                obj.rule.minLength +
                " characters",
              
            });
            return;
        }

        if (obj.rule.maxLength) {
          if (formElem.length > obj.rule.maxLength)
            newError({
              ...error,
              [obj.element]:
                "The maximum input should be " +
                obj.rule.maxLength +
                " characters",
            });
            return;
        }
 
        if (obj.rule.regex) {
          if (!obj.rule.regex.test(formElem.value))
            newError({
              ...error,
              [obj.element]: "Please specify value as per the required format",
              
            });
            return;
        }
      }
    });
     setError(newError)
  }


 
 



  return (
    <>
      <div className="form-wrapper min-h-screen flex items-center justify-center bg-gray-100">
        <div className="form-card bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
          <h1 className="text-2xl font-bold mb-6 text-center">Form Validation</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-control mb-4">
              <label htmlFor="name" className="block mb-2 font-medium">Name</label>
              <input
                type="text"
                placeholder="Name"
                id="name"
                name="name"
                onChange={handleChange}
                value={data.name}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className='error'>{error.name}</p>
            </div>

            <div className="form-control mb-4">
              <label htmlFor="phone" className="block mb-2 font-medium">Phone</label>
              <input
                type="text"
                placeholder="Phone"
                id="phone"
                name="phone"
                onChange={handleChange}
                value={data.phone}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
                            <p className='error'>{error.phone}</p>

            </div>

            <div className="form-control mb-4">
              <label htmlFor="email" className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                onChange={handleChange}
                value={data.email}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
                            <p className='error'>{error.email}</p>

            </div>

            <div className="form-control mb-4">
              <label htmlFor="hometown" className="block mb-2 font-medium">Hometown</label>
              <select
                name="hometown"
                id="hometown"
                onChange={handleChange}
                value={data.hometown}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Your Hometown</option>
                {cities.map((obj) => {
                  return (
                    <option value={obj.name} key={obj.id}>
                      {obj.name.slice(0, 1).toUpperCase() + obj.name.slice(1)}
                    </option>
                  );
                })}
              </select>
                            <p className='error'>{error.hometown}</p>

            </div>

            <div className="form-control mb-4">
              <label className="block mb-2 font-medium">Gender</label>
              <div className="radio-group flex gap-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={handleChange}
                    className="form-radio text-blue-500"
                  />
                  <span className="ml-2">Male</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={handleChange}
                    className="form-radio text-blue-500"
                  />
                  <span className="ml-2">Female</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    onChange={handleChange}
                    className="form-radio text-blue-500"
                  />
                  <span className="ml-2">Other</span>
                </label>
              </div>
                            <p className='error'>{error.gender}</p>

            </div>

            <div className="form-control mb-6">
              <label htmlFor="address" className="block mb-2 font-medium">Address</label>
              <textarea
                name="address"
                id="address"
                placeholder="Address"
                value={data.address}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 min-h-[70px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
                            <p className='error'>{error.address}</p>

            </div>

            <div className="form-control">
              <button
                type="submit"
                style={
                  isSubmitting
                    ? {
                      opacity: 0.5,
                      cursor: "not-allowed",
                    }
                    : { opacity: 1, cursor: "auto" }
                }
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Webmain