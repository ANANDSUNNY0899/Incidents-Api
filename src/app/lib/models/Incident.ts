// src/lib/models/Incident.ts
import mongoose, { Schema } from "mongoose";

const IncidentSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  severity: {
    type: String,
    enum: ["Low", "Medium", "High"],
    required: true,
  },
  reported_at: {
    type: Date,
    default: Date.now,
  },
});

export const Incident = mongoose.models.Incident || mongoose.model("Incident", IncidentSchema);
