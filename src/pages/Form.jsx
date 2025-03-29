import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Form = () => {
  return (
    <div>
      <Header />
      <Navbar />

      <div className="bg-[#e3e6eb]">
        <br />
        <div className="custom-dashboard font-medium">Create Webinar</div>
        <br />
        <div className="flex">
          <div className="custom-dashboard rounded-md mt-5 ml-5 mr-5 gap-5 bg-white p-5 w-[700px]">
            <div className="flex justify-between">
              <p>Basic Information</p>
              <p>Preview webinar</p>
            </div>
            <br />
            <hr />
            <br />
            <label htmlFor="">Title *</label>
            <div class="mb-5">
              <div class="mb-6">
                <input
                  placeholder="Enter"
                  type="text"
                  id="base-input"
                  class="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                />
              </div>
            </div>
            <label htmlFor="">Description* <span className="text-sm text-gray-400">{"Write a short introduction"}</span></label>
            <div class="mb-5">
              <div class="mb-6">
                <input
                  placeholder="Enter"
                  type="text"
                  id="base-input"
                  class="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                />
              </div>
            </div>
            <label htmlFor="">Description <span className="text-sm text-gray-400">{"Write a short introduction"}</span></label>
            <div class="mb-5">
              <div class="mb-6">
                <input
                  placeholder="Enter"
                  type="textfie"
                  id="large-input"
                  class="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                />
              </div>
            </div>
          </div>
          <div className="custom-dashboard rounded-md mt-5 ml-5 mr-5 gap-5 bg-white p-5 "></div>
        </div>
      </div>
    </div>
  );
};

export default Form;
