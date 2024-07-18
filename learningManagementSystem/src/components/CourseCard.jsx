import React from "react";
import coursesm from "../assets/coursesm.png";
import { FaStar } from "react-icons/fa";

const CourseCard = () => {
  return (
    <div className="flex justify-between bg-white shadow-lg p-4">
      <div className="mobile:hidden">
        <img src={coursesm} className="h-full" />
      </div>
      <div className="px-4">
        <div className="font-bold text-sm">
          Introduction to User Experience Design
        </div>
        <p className="text-sm pb-2">By Akash Patel</p>
        <div className="text-sm">
          <div className="flex justify-left gap-5 items-center">
            <p>4.6</p>
            <div className="flex">
              <FaStar className="text-orange-400" />
              <FaStar className="text-orange-400" />
              <FaStar className="text-orange-400" />
              <FaStar className="text-orange-400" />
              <FaStar />
            </div>
            <p>{"(651651 rating)"}</p>
          </div>
          <div className="pt-5 text-sm">
            22 Total Hours, 155 Lectures, All Levels
          </div>
        </div>
        <div className="text-sm flex gap-2 pt-2">
          <a href="" className="text-green-600">
            Save for later
          </a>
          <a href="" className="text-red-600">
            Remove
          </a>
        </div>
      </div>
      <div>
        <div className="font-bold text-xl">$45.00</div>
      </div>
    </div>
  );
};

export default CourseCard;
