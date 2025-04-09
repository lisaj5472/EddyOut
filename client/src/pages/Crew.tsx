import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { TripData } from "../interfaces/TripData";
import { UserData } from "../interfaces/UserData";

export default function Crew() {
  const { trip } = useOutletContext<{ trip: TripData }>();
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

      try {
        const [userRes, crewRes] = await Promise.all([
          fetch("/api/me", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetch(`/api/trips/${trip.id}/crew`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        if (!userRes.ok || !crewRes.ok) {
          throw new Error("Failed to fetch crew or user data");
        }

        const userData = await userRes.json();
        const crewData = await crewRes.json();

        setUser(userData);
        setCrew(crewData);
        setIsMember(
          crewData.some((member: UserData) => member.id === userData.id)
        );
      } catch (err) {
        console.error(err);
      }
    }

    if (trip?.id) {
      fetchCrew();
    }
  }, [trip]);

  async function handleJoinCrew() {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch(`/api/trips/${trip.id}/crew`, {
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
    } catch (error) {
      console.error("Error joining crew:", error);
    }
  }

  if (!user) {
    return (
      <div className="text-center mt-10 text-textBody font-body text-lg">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-light-neutral min-h-screen py-10 px-4 font-body text-textBody">
      <h1 className="text-4xl font-header text-primary mb-6 text-center">
        Trip Crew
      </h1>

      {crew.length === 0 ? (
        <p className="text-center">No crew assigned to this trip yet.</p>
      ) : (
        <ul className="space-y-2 max-w-3xl mx-auto">
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
  );
}
