import React, { useEffect, useState } from "react";
import GearList from "./GearList";
import { GearList as GearListInterface } from "../interfaces/GearListData";
// Import other components like Meals, Crew, Campsites here

const TripDetails: React.FC = () => {
  const [gearList, setGearList] = useState<GearListInterface | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const tripId = 1; // Replace with the actual trip ID
  const userId = 1; // Replace with the logged-in user's ID

  // Fetch the gear list for the trip
  const fetchGearList = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/trips/${tripId}/gear`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setGearList(data);
    } catch (error) {
      console.error("Error fetching gear list:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGearList();
  }, [tripId]);

  if (loading) {
    return <p>Loading trip details...</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Trip Details</h1>
      {/* Gear List Component */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Gear List</h2>
        {gearList ? (
          <GearList
            tripId={tripId}
            userId={userId}
            onUpdate={fetchGearList}
          />
        ) : (
          <p>No gear items found for this trip.</p>
        )}
      </section>

      {/* Add other components like Meals, Crew, Campsites here */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Meals</h2>
        {/* <Meals tripId={tripId} /> */}
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Crew</h2>
        {/* <Crew tripId={tripId} /> */}
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Campsites</h2>
        {/* <Campsites tripId={tripId} /> */}
      </section>
    </div>
    );
};

export default TripDetails;