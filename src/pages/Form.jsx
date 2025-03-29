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
          <div className="custom-dashboard rounded-md mt-5 ml-5 mr-5 gap-2 bg-white p-5 w-[700px]">
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
            <label htmlFor="">
              Description*{" "}
              <span className="text-sm text-gray-400">
                {"Write a short introduction"}
              </span>
            </label>
            <div class="mb-6">
              <label
                for="large-input"
                class="block mb-2 text-sm font-medium text-gray-900 light:text-white"
              >
                Large input
              </label>
              <input
                type="text"
                placeholder="Enter"
                id="large-input"
                class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
              />
            </div>
            <label htmlFor="">
              Description{" "}
              <span className="text-sm text-gray-400">
                {"Write a short introduction"}
              </span>
            </label>

            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 light:text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
              placeholder="Enter"
            ></textarea>
            <br />
            <div className="flex justify-between">
              <div>
                <p>Enrollment Date*</p>
                <input
                  className="border border-gray-300 rounded p-2"
                  type="date"
                  name=""
                  id=""
                />
              </div>
              <div>
                <p>Pricing*</p>
                <input
                  className="border border-gray-300 rounded p-2"
                  type="text"
                  placeholder="enter"
                />
              </div>
            </div>
          </div>
          <div className="custom-dashboard rounded-md gap-2 bg-white p-5 ">
            <p>Uploads</p>
            <br />
            <hr />
            <br />
            <p>Video*</p>

            <div class="flex items-center justify-center w-[300px]">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 light:hover:bg-gray-800 light:bg-gray-700 hover:bg-gray-100 light:border-gray-600 light:hover:border-gray-500 light:hover:bg-gray-600"
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    class="w-8 h-8 mb-4 text-gray-500 light:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 light:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p class="text-xs text-gray-500 light:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
            </div>

            <p>Transcipt*</p>
            <div class="flex items-center justify-center w-[300px]">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 light:hover:bg-gray-800 light:bg-gray-700 hover:bg-gray-100 light:border-gray-600 light:hover:border-gray-500 light:hover:bg-gray-600"
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    class="w-8 h-8 mb-4 text-gray-500 light:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 light:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p class="text-xs text-gray-500 light:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
