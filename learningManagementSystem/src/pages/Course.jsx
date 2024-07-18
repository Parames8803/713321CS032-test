import React from "react";
import { FaStar } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import courseImage from "../assets/courseImage.png";
import socialIcons from "../assets/socialIcons.png";
import { useNavigate } from "react-router-dom";

const Course = () => {
  const push = useNavigate();
  return (
    <>
      <div className="bg-[#F8FAFC] flex flex-row-reverse justify-center items-center py-10 mobile:flex-col p-0">
        <div className="w-2/3 flex flex-col gap-5 p-10 mobile:w-full">
          <div className="text-2xl font-bold">
            Introduction to User Experience Design
          </div>
          <div>
            This course is meticulously crafted to provide you with a
            foundational understanding of the principles, methodologies, and
            tools that drive exceptional user experiences in the digital
            landscape.
          </div>
          <div>
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
            <div className="pt-5">22 Total Hours, 155 Lectures, All Levels</div>
          </div>
          <div className="flex items-center gap-4">
            <TbWorld />
            <div>English, Spanish, Italy</div>
          </div>
          <div>
            <div className="py-4 text-xl font-bold">Course Description</div>
            <div>
              This interactive e-learning course will introduce you to User
              Experience (UX) design, the art of creating products and services
              that are intuitive, enjoyable, and user-friendly. Gain a solid
              foundation in UX principles and learn to apply them in real-world
              scenarios through engaging modules and interactive exercises.{" "}
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white p-5 shadow-lg rounded-lg">
            <div>
              <img src={courseImage} />
            </div>
            <div className="flex gap-2 py-5">
              <div className="text-xl font-bold">$49.5</div>
              <div className="text-lg text-gray-600 line-through">$99.5</div>
              <div className="text-xl text-green-500 font-bold">50% Off</div>
            </div>
            <div className="flex flex-col gap-4">
              <button
                className="bg-black text-white px-3 py-2 rounded-md"
                onClick={() => {
                  push("/cart");
                }}
              >
                Add to Cart
              </button>
              <button className="border-solid border-2 border-black mb-4 text-black px-3 py-2 rounded-md">
                Buy Now
              </button>
            </div>
            <div className="mt-4 border-solid border-t-2 border-slate-800 pt-4">
              <div className="pb-2">Share</div>
              <div>
                <img src={socialIcons} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
