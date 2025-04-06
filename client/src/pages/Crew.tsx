import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { UserData } from "../interfaces/UserData";

export default function Crew() {
  const { id } = useParams<{ id: string }>();
  const [crew, setCrew] = useState<UserData[]>([]);
  const [isMember, setIsMember] = useState(false);
  const user = JSON.parse(localStorage.getItem("user") || "{}"); // assumes you store user here

  useEffect(() => {
    async function fetchCrew() {
      const res = await fetch(`/api/trips/${id}/crew`);
      const data = await res.json();
      setCrew(data);

      const alreadyMember = data.some(
        (member: UserData) => member.id === user.id
      );
      setIsMember(alreadyMember);
    }

    fetchCrew();
  }, [id, user.id]);

  async function handleJoinCrew() {
    const res = await fetch(`/api/trips/${id}/crew`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: user.id }),
    });

    if (res.ok) {
      setCrew((prev) => [...prev, user]);
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
