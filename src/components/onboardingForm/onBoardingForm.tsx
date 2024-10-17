"use client";

import React, { useState } from "react";
import Button from "../button/button";
import { useRouter } from "next/navigation";
import Field from "./field";

export default function OnBoardingForm() {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [school, setSchool] = useState<string>();
  const [studentNum, setStudentNum] = useState<number | string | undefined>();

  const router = useRouter();

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
      console.log(data);

      router.push("/schedule");
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <form className="flex flex-col gap-4 bg-gray-50 w-fit p-10 rounded-md drop-shadow-xl">
      <Field
        name="Full Name"
        type="text"
        id="name"
        setState={setName}
        state={name}
      />
      <Field
        name="University/College"
        type="text"
        id="school"
        setState={setSchool}
        state={school}
      />
      <Field
        name="Student Email"
        type="email"
        id="email"
        setState={setEmail}
        state={email}
      />
      <Field
        name="Student Number"
        type="number"
        id="studentNum"
        setState={setStudentNum}
        state={studentNum}
      />

      <Button text="Submit" onClick={handleSubmit} />
    </form>
  );
}
