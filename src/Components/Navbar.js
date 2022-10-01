import React, { Fragment } from 'react';
import reset from '../assets/images/icon/undo.png'

const Navbar = () => {
  return (
    <Fragment>
      <section className="max-w-[1200px] mx-auto pt-20 ">
        <div className="flex justify-between">
          <div className="gap-x-6 flex items-center ">
            <div>
              <div>
                <select class=" py-1 px-3 border-2 outline-none border-gray-300 bg-white">
                  <option value="">- Hoodies</option>
                  <option value="1">Item 1</option>
                  <option value="2">Item 2</option>
                  <option value="3">Item 3</option>
                </select>
              </div>
            </div>
            <div>
              <div>
                <select class=" py-1 px-5 border-2 outline-none border-gray-300 bg-white">
                  <option value="">Size</option>
                  <option value="1">Item 1</option>
                  <option value="2">Item 2</option>
                  <option value="3">Item 3</option>
                </select>
              </div>
            </div>
            <div>
              <button className="flex items-center gap-x-1">
                <img src={reset} alt="" />
                <span className="text-[#05a3be]">Reset</span>
              </button>
            </div>
          </div>
          <div className="flex gap-x-7">
            <div className="flex items-center gap-x-3">
              <h4 className="text-gray-600">Search:</h4>
              <input
                className="border-2 border-gray-200 w-full bg-[#e8e8e8e0] outline-none"
                type="search"
                name="search"
              />
            </div>
            <div>
              <button className="bg-[#05a3be] px-[18px] py-1 text-white font-semibold ">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Navbar;