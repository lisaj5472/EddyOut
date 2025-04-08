import { useEffect, useState } from "react";
import { TripData } from "../interfaces/TripData";
import TripSummaryCard from "../components/TripSummaryCard";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { getTrips } from "../api/tripAPI";

export default function Dashboard() {
  const [trips, setTrips] = useState<TripData[]>([]);

  useEffect(() => {
    async function fetchTrips() {
      const data = await getTrips();
      // Convert date strings into actual Date objects
      const parsed = data.map((trip: TripData) => ({
        ...trip,
        startDate: new Date(trip.startDate),
        endDate: new Date(trip.endDate),
      }));
      setTrips(parsed);
    }
    fetchTrips();
  }, []);

  if (trips.length === 0) {
    return (
      <div className="text-center mt-10 text-textBody font-body text-lg">
        You have not created any trips yet.
      </div>
    );
  }

  const now = new Date();

  // Separate trips into future, past, and current
  const futureTrips = trips.filter((trip) => trip.startDate > now);
  const pastTrips = trips.filter((trip) => trip.endDate < now);
  const currentTrips = trips.filter(
    (trip) => trip.startDate <= now && trip.endDate >= now
  );

  // Pick the most current trip
  const mostCurrentTrip = [...currentTrips, ...futureTrips].sort(
    (a, b) => a.startDate.getTime() - b.startDate.getTime()
  )[0];

  const filteredFutureTrips = futureTrips.filter(
    (t) => t.id !== mostCurrentTrip?.id
  );
  const filteredPastTrips = pastTrips.filter(
    (t) => t.id !== mostCurrentTrip?.id
  );

  return (
    <>
      <Nav />
      <main className="flex-1">
        <div className="bg-light-neutral min-h-screen py-10 px-4 font-body text-textBody">
          <h1 className="text-4xl font-header text-primary mb-6 text-center">
            Trip Dashboard
          </h1>
          <p className="text-center text-lg mb-8">
            Here is a list of all available trips. Click each one to see more
            details or assign yourself to a crew or a task.
          </p>

          <div className="space-y-6 max-w-4xl mx-auto">
            {mostCurrentTrip && (
              <section>
                <h2 className="text-2xl font-bold text-center text-primary mb-2">
                  Most Current Trip
                </h2>
                <TripSummaryCard trip={mostCurrentTrip} />
              </section>
            )}

            {futureTrips.length > 0 && (
              <section>
                <h2 className="text-xl font-semibold text-center mb-2">
                  Upcoming Trips
                </h2>
                {filteredFutureTrips.map((trip) => (
                  <TripSummaryCard key={trip.id} trip={trip} />
                ))}
              </section>
            )}

            {pastTrips.length > 0 && (
              <section>
                <h2 className="text-xl font-semibold text-center mb-2">
                  Past Trips
                </h2>
                {filteredPastTrips.map((trip) => (
                  <TripSummaryCard key={trip.id} trip={trip} />
                ))}
              </section>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
