// src/app/api/incidents/route.ts
// import { connectToDatabase } from "@/lib/mongodb";
// import { Incident } from "@/lib/models/Incident";
import { Incident } from "@/app/lib/models/Incident";
import { connectToDatabase } from "@/app/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDatabase();
  const incidents = await Incident.find();
  return NextResponse.json(incidents);
}

export async function POST(req: Request) {
  await connectToDatabase();
  const body = await req.json();

  const { title, description, severity } = body;
  if (!title || !description || !["Low", "Medium", "High"].includes(severity)) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }

  const newIncident = await Incident.create({ title, description, severity });
  return NextResponse.json(newIncident, { status: 201 });
}
