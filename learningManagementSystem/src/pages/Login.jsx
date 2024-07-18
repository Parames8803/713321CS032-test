import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const push = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [users, setUsers] = useState([]);
  const handleInputChange = (e, key) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [key]: value,
    });
  };
  function getAllUsers() {
    let usersJSON = localStorage.getItem("users");
    setUsers(JSON.parse(usersJSON) || []);
  }
  const handleSubmit = () => {
    let userEmail = formData.email;
    let obj = users.filter((item) => item.email === userEmail);
    if (obj.length) {
      localStorage.setItem("currentUser", userEmail);
      toast.success("Logged in Success");
      push("/");
    } else {
      toast.warning("Invalid Credentials");
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
              className="w-96 tablet:w-80"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="flex flex-col gap-2 my-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => {
                    handleInputChange(e, "email");
                  }}
                  placeholder="Enter Email ID"
                  className="focus:outline-0 border-solid border-2 border-slate-400 px-3 py-2"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 my-2">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={(e) => {
                    handleInputChange(e, "password");
                  }}
                  placeholder="Enter Password"
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
                  <p>Sign in</p>
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

export default Login;
