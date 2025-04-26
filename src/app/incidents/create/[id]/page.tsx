'use client';
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Navbar from "@/components/Navbar";

interface Incident {
  _id: string;
  title: string;
  description: string;
  severity: string;
}

export default function IncidentDetail() {
  const { id } = useParams();
  const [incident, setIncident] = useState<Incident | null>(null);

  useEffect(() => {
    if (id) {
      axios.get(`/api/incidents/${id}`)
        .then((res) => setIncident(res.data))
        .catch((err) => console.error("Error fetching incident:", err));
    }
  }, [id]);

  if (!incident) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <Navbar />
      <h1>{incident.title}</h1>
      <p><strong>Description:</strong> {incident.description}</p>
      <p><strong>Severity:</strong> {incident.severity}</p>
    </div>
  );
}
