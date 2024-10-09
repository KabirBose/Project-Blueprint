"use client";

import Button from "../button/button";

export default function OnBoardingForm() {
  return (
    <form className="flex flex-col gap-4 bg-gray-50 w-fit p-10 rounded-md drop-shadow-xl">
      <div className="flex flex-col w-64">
        <label htmlFor="name" className="font-medium">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          className="bg-gray-100 px-3 py-2 rounded-sm"
        />
      </div>

      <div className="flex flex-col w-64">
        <label htmlFor="school" className="font-medium">
          University/College
        </label>
        <input
          type="text"
          id="school"
          className="bg-gray-100 px-3 py-2 rounded-sm"
        />
      </div>

      <div className="flex flex-col w-64">
        <label htmlFor="email" className="font-medium">
          Student Email
        </label>
        <input
          type="email"
          id="email"
          className="bg-gray-100 px-3 py-2 rounded-sm"
        />
      </div>

      <div className="flex flex-col w-64">
        <label htmlFor="studentNum" className="font-medium">
          Student Number
        </label>
        <input
          type="number"
          id="studentNum"
          className="bg-gray-100 px-3 py-2 rounded-sm"
        />
      </div>

      <Button text="Submit" />
    </form>
  );
}
