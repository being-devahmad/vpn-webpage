import React from "react";
import background from "../assets/Frame 37345.png";

const HeroPage = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="bg-[#101828] w-full h-min-screen pt-16 pb-16 font-Soliden Trial"
      >
        <div className="container mx-auto">
          {/* Main heading */}
          <div className="items-center">
            <p className="text-center text-white font-bold text-5xl">
              Customized VPN
              <span className="text-[#2448D0]"> Solutions for You</span>
            </p>
            <p className="text-center text-white pt-3">
              Discover Ideal Plans: Tailored VPN Pricing for Every Need.
            </p>
          </div>

          {/* Cards section */}
          <div className="container mx-auto mt-10">
            <div className="flex items-center justify-center gap-5 flex-wrap">
              {/* card 1 */}
              <div className="border-2 border-[#1D2939] p-6 text-center rounded-lg bg-[#101828] text-white">
                <div className="flex justify-around items-center pb-4">
                  <p>12 Months</p>
                  <input type="radio" name="" id="" />
                </div>
                <p className="text-1xl font-medium pb-4">
                  USD <span className="font-bold text-2xl">6.49</span> /mo
                </p>
                <span className="bg-gray-500 rounded-2xl text-xs p-2 ">
                  save 69 %
                </span>
                <p className="text-xs mt-3">
                  Billed $59.76 for the first 24 months,
                  <br /> then $59.76 every 12 months
                </p>
              </div>
              {/* card2 */}
              <div className="border-2 border-[#3858d4] p-6 text-center rounded-lg bg-[#101828] text-white">
                <div className="flex justify-around items-center pb-4">
                  <p>24 Months</p>
                  <input type="radio" name="" id="" />
                </div>
                <p className="text-1xl font-medium pb-4">
                  USD <span className="font-bold text-2xl">2.49</span> /mo
                </p>
                <span className="bg-[#FE405C] rounded-2xl text-xs p-2 ">
                  save 69 %
                </span>
                <p className="text-xs mt-3">
                  Billed $59.76 for the first 24 months,
                  <br /> then $59.76 every 12 months
                </p>
              </div>
              {/* card 3 */}
              <div className="border-2 border-[#1D2939] p-6 text-center rounded-lg bg-[#101828] text-white">
                <div className="flex justify-around items-center pb-4">
                  <p>36 Months</p>
                  <input type="radio" name="" id="" />
                </div>
                <p className="text-1xl font-medium pb-4">
                  USD <span className="font-bold text-2xl">6.49</span> /mo
                </p>
                <span className="bg-gray-500 rounded-2xl text-xs p-2 ">
                  save 69 %
                </span>
                <p className="text-xs mt-3">
                  Billed $59.76 for the first 24 months,
                  <br /> then $59.76 every 12 months
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroPage;
