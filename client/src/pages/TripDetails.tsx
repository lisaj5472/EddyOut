import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import TripSummaryCard from "../components/TripSummaryCard";
import { getTrips } from "../api/tripAPI";
import { TripData } from "../interfaces/TripData"; // Make sure this import is correct

export default function TripDetails() {
  const { id } = useParams<{ id: string }>();
  const [trip, setTrip] = useState<TripData | null>(null);

  useEffect(() => {
    async function fetchTrip() {
      try {
        const allTrips = await getTrips();
        const parsedTrips: TripData[] = allTrips.map((trip: TripData) => ({
          ...trip,
          startDate: new Date(trip.startDate),
          endDate: new Date(trip.endDate),
        }));
        console.log("ID from URL:", id);
        console.log("All Trips:", parsedTrips);
        const foundTrip = parsedTrips.find((t) => t.id.toString() === id);
        if (foundTrip) {
          console.log("Matched Trip:", foundTrip);
          setTrip(foundTrip);
        } else {
          console.error("Trip not found");
        }
      } catch (error) {
        console.error("Error fetching trip:", error);
      }
    }

    if (id) {
      fetchTrip();
    }
  }, [id]);

  if (!trip) {
    return (
      <div className="text-center mt-10 text-textBody font-body text-lg">
        Loading trip details...
      </div>
    );
  }

  return (
    <>
      <Nav />
      <main className="flex-1">
        <div className="p-6 space-y-4">
          <TripSummaryCard trip={trip} />
          <div className="space-x-4 mt-4">
            <Link to={`/trips/${id}/floatplan`} className="btn">
              Float Plan
            </Link>
            <Link to={`/trips/${id}/meals`} className="btn">
              Meals
            </Link>
            <Link to={`/trips/${id}/gear`} className="btn">
              Gear List
            </Link>
            <Link to={`/trips/${id}/crew`} className="btn">
              Crew
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
