"use client";

import Button from "../button/button";

export default function OnBoardingForm() {
  return (
    <form className="flex flex-col gap-4 bg-gray-50 w-fit p-10 rounded-md drop-shadow-xl">
      <div className="flex flex-col w-64">
        <label htmlFor="name" className="font-medium">
          Full Name
          <input
            type="text"
            name="name"
            className="bg-gray-100 px-3 py-2 rounded-sm"
          />
        </label>
      </div>

      <div className="flex flex-col w-64">
        <label htmlFor="school" className="font-medium">
          University/College
          <input
            type="text"
            name="school"
            className="bg-gray-100 px-3 py-2 rounded-sm"
          />
        </label>
      </div>

      <div className="flex flex-col w-64">
        <label htmlFor="student-email" className="font-medium">
          Student Email
          <input
            type="email"
            name="student-email"
            className="bg-gray-100 px-3 py-2 rounded-sm"
          />
        </label>
      </div>

      <div className="flex flex-col w-64">
        <label htmlFor="student-number" className="font-medium">
          Student Number
          <input
            type="number"
            name="student-number"
            className="bg-gray-100 px-3 py-2 rounded-sm"
          />
        </label>
      </div>

      <Button text="Submit" />
    </form>
  );
}
