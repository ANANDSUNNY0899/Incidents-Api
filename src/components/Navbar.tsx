import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#000", marginBottom: "20px" }}>
      <Link href="/" style={{ marginRight: "20px" }}>Home</Link>
      <Link href="/incidents" style={{ marginRight: "20px" }}>Incidents</Link>
      <Link href="/incidents/create">Create Incident</Link>
    </nav>
  );
}
