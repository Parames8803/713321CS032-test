import React from "react";
import CourseCard from "../components/CourseCard";

const Cart = () => {
  return (
    <>
      <div className="flex tablet:flex-col">
        <div className="w-full p-10">
          <div className="text-2xl font-medium pb-5">Shopping Cart</div>
          <div className="flex flex-col gap-2">
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </div>
        <div className="w-2/3 flex justify-center p-10 tablet:w-full">
          <div className="flex flex-col gap-4">
            <div className="text-xl">Order Details</div>
            <div className="bg-[#F8FAFC] border-solid border-2 border-[#E2E8F0] rounded-lg w-72">
              <div className="flex justify-between py-2 px-4 border-solid border-b-2 border-gray-200">
                <p>Price</p>
                <p className="font-medium">$300.00</p>
              </div>
              <div className="flex justify-between py-2 px-4 border-solid border-b-2 border-gray-200">
                <p>Discount</p>
                <p className="font-medium">-$20.00</p>
              </div>
              <div className="flex justify-between py-2 px-4 border-solid border-b-2 border-gray-200">
                <p>Task</p>
                <p className="font-medium">$10.00</p>
              </div>
              <div className="flex justify-between py-2 px-4">
                <p className="font-medium text-xl">Total</p>
                <p className="font-medium text-xl">$290.00</p>
              </div>
            </div>
            <div>
              <button className="bg-black text-white border-solid border-2 border-black rounded-lg w-full py-2">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
