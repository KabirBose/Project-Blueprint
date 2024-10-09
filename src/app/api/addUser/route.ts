import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { name, email, school, studentNum } = await request.json();

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        school,
        studentNum,
      },
    });

    return NextResponse.json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: "Error creating user" }, { status: 500 });
  }
}
