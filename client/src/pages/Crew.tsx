import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { UserData } from "../interfaces/UserData";

export default function Crew() {
  const { id } = useParams<{ id: string }>();
  const [crew, setCrew] = useState<UserData[]>([]);
  const [user, setUser] = useState<UserData | null>(null);
  const [isMember, setIsMember] = useState(false);

  useEffect(() => {
    async function fetchCrew() {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No auth token found");
        return;
      }

      const [userRes, crewRes] = await Promise.all([
        fetch("/api/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
        fetch(`/api/trips/${id}/crew`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
      ]);

      if (!userRes.ok || !crewRes.ok) {
        console.error("Failed to fetch crew or user data");
        return;
      }

      const userData = await userRes.json();
      const crewData = await crewRes.json();

      setCrew(crewData);
      setUser(userData); // you’ll need to add `const [user, setUser] = useState<UserData | null>(null)`
      setIsMember(
        crewData.some((member: UserData) => member.id === userData.id)
      );
    }

    fetchCrew();
  }, [id]);

  if (!user) return <p className="text-center">Loading...</p>;

  async function handleJoinCrew() {
    const token = localStorage.getItem("token");

    const res = await fetch(`/api/trips/${id}/crew`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.ok && user) {
      setCrew((prev) =>
        prev.some((m) => m.id === user.id) ? prev : [...prev, user]
      );
      setIsMember(true);
    }
  }

  return (
    <>
      <Nav />
      <main className="flex-1 px-4 py-10 bg-light-neutral text-textBody font-body">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-header text-primary mb-6 text-center">
            Trip Crew
          </h1>

          {crew.length === 0 ? (
            <p className="text-center">No crew assigned to this trip yet.</p>
          ) : (
            <ul className="space-y-2">
              {crew.map((member) => (
                <li key={member.id} className="bg-white p-4 rounded shadow">
                  <p className="font-semibold">
                    {member.firstname || ""} {member.lastname || ""} (
                    {member.username})
                  </p>
                  <p className="text-sm text-gray-500">{member.email}</p>
                </li>
              ))}
            </ul>
          )}

          {!isMember && (
            <div className="mt-8 text-center">
              <button
                onClick={handleJoinCrew}
                className="bg-primary text-white px-6 py-2 rounded shadow hover:bg-primary-dark"
              >
                Join This Crew
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
