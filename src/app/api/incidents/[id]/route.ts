// src/app/api/incidents/[id]/route.ts
import { NextResponse } from "next/server";
// import { Types } from "mongoose";
import { Incident } from "@/app/lib/models/Incident";
import { connectToDatabase } from "@/app/lib/mongodb";
import { Types } from "mongoose";



export async function GET(_: Request, { params }: { params: { id: string } }) {
  await connectToDatabase();
  const incident = await Incident.findById(params.id);
  if (!incident) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(incident);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  await connectToDatabase();
  const result = await Incident.findByIdAndDelete(params.id);
  if (!result) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ message: "Deleted successfully" });
}
