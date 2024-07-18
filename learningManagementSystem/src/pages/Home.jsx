import React from "react";
import homeBanner from "../assets/homeBanner.png";
import stat1 from "../assets/stat1.png";
import stat2 from "../assets/stat2.png";
import stat3 from "../assets/stat3.png";
import stat4 from "../assets/stat4.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const push = useNavigate();
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-center items-center p-4 tablet:flex-col-reverse">
          <div className="px-5 tablet:text-center my-5">
            <div className="text-3xl font-bold py-5">
              Unlock Your Potential
              <br /> with 2Learn
            </div>
            <div className="text-justify py-4">
              Welcome to 2Learn, where learning knows no bounds. We believe that
              education is the key to personal and professional growth, and
              we're here to guide you on your journey to success.
            </div>
            <button
              className="bg-blue-900 text-white py-2 px-4 rounded-sm my-2"
              onClick={() => {
                push("/course");
              }}
            >
              Start your Learning journey
            </button>
          </div>
          <img src={homeBanner} className="tablet:w-96" />
        </div>
        <div>
          <div className="flex flex-wrap justify-center mt-10 mb-20 gap-10 px-2 tablet:flex-wrap">
            <img src={stat1} />
            <img src={stat2} />
            <img src={stat3} />
            <img src={stat4} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
