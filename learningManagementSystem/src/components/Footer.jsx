import React from "react";
import logo from "../assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaMicrosoft } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-[#1E293B] text-white text-sm flex mobile:flex-wrap jusitfy-center p-8">
        <div className="w-full px-4 my-3">
          <div className="flex items-center py-2">
            <img src={logo} alt="" />
            <div className="flex items-center gap-1 text-2xl font-bold">
              <span className="text-xl">2</span>Learn
            </div>
          </div>
          <div className="">
            Empowering learners through accessible and engaging online
            education. Byway is a leading online learning platform dedicated to
            providing high-quality, flexible, and affordable educational
            experiences.
          </div>
        </div>
        <div className="w-full px-4 text-center my-3">
          <div className="text-xl font-bold">Get Help</div>
          <div className="py-5">
            <ul>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Latest Articles</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full px-4 text-center my-3">
          <div className="text-xl font-bold">Programs</div>
          <div className="py-5">
            <ul>
              <li>
                <a href="">Art & Design</a>
              </li>
              <li>
                <a href="">Business</a>
              </li>
              <li>
                <a href="">IT & Software</a>
              </li>
              <li>
                <a href="">Languages</a>
              </li>
              <li>
                <a href="">Programming</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full px-4 my-3 text-center">
          <div className="text-xl font-bold">Contact Us</div>
          <div className="py-5">
            <div>Address: 123 Main Street, Anytown, CA 12345</div>
            <div>Tel: +(123) 456-7890</div>
            <div>Mail: bywayedu@webkul.in</div>
          </div>
          <div className="flex justify-center gap-2 text-xl">
            <FaFacebook />
            <FaGithub />
            <FaGoogle />
            <FaXTwitter />
            <FaMicrosoft />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
