"use client";

import React, { useState } from "react";
import Button from "../button/button";

export default function OnBoardingForm() {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [school, setSchool] = useState<string>();
  const [studentNum, setStudentNum] = useState<number>();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/addUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          email: email,
          school: school,
          studentNum: Number(studentNum),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add user");
      }

      const data = await response.json();
      console.log("User added:", data);
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          value={name}
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSchool(e.target.value)
          }
          value={school}
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          value={email}
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setStudentNum(Number(e.target.value))
          }
          value={studentNum}
        />
      </div>

      <Button text="Submit" onClick={handleSubmit} />
    </form>
  );
}
