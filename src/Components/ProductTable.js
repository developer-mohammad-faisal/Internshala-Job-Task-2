import React, { Fragment } from "react";
import cart from "../assets/images/icon/cart.png";

const ProductTable = () => {
  return (
    <Fragment>
      <section className="max-w-[1200px] mx-auto">
        <div class="overflow-x-auto mx-auto container ">
          <table class="min-w-full text-sm divide-y-2 divide-gray-400">
            <thead className="font-semibold text-gray-600 ">
              <tr>
                <th class="py-2">Image</th>
                <th class="py-2">Name</th>
                <th class="py-2">Color</th>
                <th class="py-2">Size</th>
                <th class="py-2">Stock</th>
                <th class="py-2">Price</th>
                <th class="py-2">Quantity</th>
                <th class="py-2">Buy</th>
              </tr>
            </thead>

            <tbody className="text-center">
              <tr>
                <td>
                  <img
                    width={30}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSamKtgtF_-F2ooZj48PKzodPOZMeFbu__dMQ&usqp=CAU"
                    alt=""
                  />
                </td>
                <td>Woo Ninja</td>
                <td>Black</td>
                <td>XL</td>
                <td>1000</td>
                <td>$54</td>
                <td>
                  <input
                    className="border-2 border-gray-200 w-[60px] bg-[#e8e8e8e0] outline-none"
                    type="search"
                    name="search"
                  />
                </td>
                <td>
                  <div className="bg-[#454545]  ">
                    <img className=" mx-auto w-[15px] " src={cart} alt="" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </Fragment>
  );
};

export default ProductTable;
