import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in your name, email, and message" },
        { status: 400 }
      );
    }

    const contact = await prisma.contact.create({
      data: { name, email, message },
    });

    return NextResponse.json(
      { success: true, contact },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact error:", error);
    return NextResponse.json(
      { error: "Server error, please try again later" },
      { status: 500 }
    );
  }
}
