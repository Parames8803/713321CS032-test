import React, { useEffect, useState } from "react";
import registerPoster from "../assets/registerPoster.png";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Register = () => {
  const push = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    cnfPassword: "",
  });
  const handleInputChange = (e, key) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [key]: value,
    });
  };
  const [users, setUsers] = useState([]);

  function getAllUsers() {
    let usersJSON = localStorage.getItem("users");
    setUsers(JSON.parse(usersJSON) || []);
  }

  function addUser(user) {
    let usersJSON = localStorage.getItem("users");
    let users = JSON.parse(usersJSON) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  }

  const handleSubmit = () => {
    if (formData.cnfPassword === formData.password) {
      let obj = {
        email: formData.email,
        password: formData.password,
      };
      addUser(obj);
      localStorage.setItem("currentUser", obj.email);
      push("/");
      toast.success("User register successfully");
    } else {
      toast.warning("Please confirm Password");
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center m-0">
        <div className="w-full flex justify-center items-center my-10">
          <div className="flex flex-col">
            <div className="text-2xl font-semibold py-5">
              Create your account
            </div>
            <form
              action=""
              className="w-96"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="flex flex-col gap-2 my-2">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Username here"
                  value={formData.username}
                  onChange={(e) => {
                    handleInputChange(e, "username");
                  }}
                  className="focus:outline-0 border-solid border-2 border-slate-400 px-3 py-2"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 my-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email ID"
                  value={formData.email}
                  onChange={(e) => {
                    handleInputChange(e, "email");
                  }}
                  className="focus:outline-0 border-solid border-2 border-slate-400 px-3 py-2"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 my-2">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={(e) => {
                    handleInputChange(e, "password");
                  }}
                  className="focus:outline-0 border-solid border-2 border-slate-400 px-3 py-2"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 my-2">
                <label htmlFor="cnfPassword">Confirm Password</label>
                <input
                  type="password"
                  name="cnfPassword"
                  placeholder="Confirm Password"
                  value={formData.cnfPassword}
                  onChange={(e) => {
                    handleInputChange(e, "cnfPassword");
                  }}
                  className="focus:outline-0 border-solid border-2 border-slate-400 px-3 py-2"
                  required
                />
              </div>
              <div className="py-10">
                <button
                  className="flex justify-center items-center gap-4 bg-black text-white px-4 py-2 border-solid border-2 border-black"
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  <p>Create Account</p>
                  <FaArrowRight />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
