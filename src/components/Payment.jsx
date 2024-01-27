import React from "react";
import pic from "../assets/2.png";
import pic1 from "../assets/Payment Icons.png";
import pic2 from "../assets/PaymentIcon.png";
import pic3 from "../assets/PaymentIcon4.png";
import pic4 from "../assets/PaymentIcon1.png";

const Payment = () => {
  return (
    <>
      <div className="w-full bg-[#101828] px-8 md:px-12">
        <div className="container flex justify-between items-center mx-auto gap-8 flex-wrap md:flex-nowrap">
          {/* Details section */}
          <div className="w-full text-white">
            <p className="text-2xl font-bold">
              2. Enter the details to continue
            </p>
            <p className="text-xs">
              With the provided email you will be able to access Hydra VPN
              Premium services.
            </p>
            <div className="border-gray-200 text-white">
              <form action="">
                <label htmlFor="" className="font-bold block text-sm pt-2 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="border border-gray-300 text-gray-700 rounded bg-[#101828] w-full p-2 text-sm mb-3"
                  placeholder="Enter your Email"
                />

                <label htmlFor="" className="font-bold block text-sm pt-2 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="border border-gray-300 text-gray-700 rounded bg-[#101828] w-full p-2 text-sm mb-2"
                  placeholder="Enter your Password"
                />
                <p className="text-xs">
                  We keep your information private and contact you only due to
                  our services.
                </p>
              </form>
            </div>
          </div>
          {/* Total section */}
          <div className="w-full text-white">
            <div className="flex justify-between text-[20px]">
              <p className="">Discount</p>
              <p className="text-[#DC2626]">-$2.86/mo</p>
            </div>
            <div className="flex justify-between text-[20px] my-3">
              <p>Subtotal</p>
              <p className="">-$2.86/mo</p>
            </div>
            <div className="px-3 my-5">
              <hr />
            </div>
            <div className="flex justify-between  my-3">
              <p className="text-2xl font-bold items-center flex">
                Total
                <span className="text-[#DC2626] text-xs">Apply promo code</span>
              </p>
              <p className="text-2xl font-bold">-$2.00/mo</p>
            </div>
            <div className="flex justify-between  my-3">
              <p className="text-xl font-bold">Encrypted & Secured</p>
              <button className="btn bg-[#DC2626] px-4 py-1 rounded-lg ">
                Pay Now
              </button>
            </div>
          </div>
        </div>
        {/* Payment section */}
        <div className="md:w-1/2 w-full mt-6 pb-5 text-white">
          <p className="text-2xl font-bold mb-2">3. Payment Method</p>
          <div className="border border-blue-500 p-5 rounded-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <input type="radio" checked />
                <p>Credit Card</p>
              </div>
              <div className="flex items-center gap-0.5">
                <img src={pic} alt="" />
                <img src={pic4} alt="" />
                <img src={pic3} alt="" />
                <img src={pic2} alt="" />
              </div>
            </div>
            <div className="px-3 my-5">
              <hr />
            </div>
            <form action="">
              <label htmlFor="" className="font-bold block text-sm pt-2">
                Card No
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="border border-gray-300 text-gray-900 text-sm rounded-s block w-full p-2.5 bg-[#101828] pl-12"
                  placeholder="Card No"
                />
                <img
                  src={pic}
                  alt="Icon"
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-6 "
                />
              </div>

              <div className="flex items-center justify-between gap-2 flex-wrap md:flex-nowrap">
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="font-bold block text-sm pt-2 mb-2"
                  >
                    Expiry date
                  </label>
                  <input
                    type="date"
                    className="border border-gray-300 text-white rounded bg-[#101828] w-full p-2 text-sm mb-2"
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor=""
                    className="font-bold block text-sm pt-2 mb-2"
                  >
                    Security code
                  </label>
                  <input
                    type="number"
                    placeholder="123"
                    className="border border-gray-300 text-white rounded bg-[#101828] w-full p-2 text-sm mb-2"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="border border-white p-2 mt-2 rounded-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <input type="radio" />
                <p>Paypal</p>
              </div>
              <div className="flex items-center gap-0.5">
                <img src={pic1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
