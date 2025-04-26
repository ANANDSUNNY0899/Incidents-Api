'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Navbar from "@/components/Navbar";

interface Incident {
  _id: string;
  title: string;
  description: string;
  severity: string;
}

export default function IncidentList() {
  const [incidents, setIncidents] = useState<Incident[]>([]);

  useEffect(() => {
    axios.get("/api/incidents")
      .then((res) => setIncidents(res.data))
      .catch((err) => console.error("Error fetching incidents:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <Navbar />
      <h1>All Incidents</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {incidents.map((incident) => (
          <div key={incident._id} style={{ border: "1px solid #ccc", padding: "20px", width: "300px", borderRadius: "8px" }}>
            <h2>{incident.title}</h2>
            <p>{incident.description.substring(0, 100)}...</p>
            <p><strong>Severity:</strong> {incident.severity}</p>
            <Link href={`/incidents/${incident._id}`}>View Details</Link>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "20px" }}>
        <Link href="/incidents/create">
          <button style={{ padding: "10px 20px", background: "blue", color: "white", borderRadius: "5px" }}>
            Create New Incident
          </button>
        </Link>
      </div>
    </div>
  );
}
