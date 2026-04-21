import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, nationality, hospital, department, symptom, preferredDate, notes } = body;

    if (!name || !email || !phone || !nationality || !symptom) {
      return NextResponse.json(
        { error: "Please fill in all required fields" },
        { status: 400 }
      );
    }

    const booking = await prisma.booking.create({
      data: {
        name,
        email,
        phone,
        nationality,
        hospital: hospital || null,
        department: department || null,
        symptom,
        preferredDate: preferredDate || null,
        notes: notes || null,
      },
    });

    return NextResponse.json(
      { success: true, booking },
      { status: 201 }
    );
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json(
      { error: "Server error, please try again later" },
      { status: 500 }
    );
  }
}
