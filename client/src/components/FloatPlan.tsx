import { useState, useEffect } from "react";
import ScheduleDay from "../components/ScheduleDay";
import { TripData } from "../interfaces/TripData";
import { useParams } from "react-router-dom";
import Nav from "./Nav";

export default function FloatPlan() {
  const [trip, setTrip] = useState<TripData | null>(null);
  const [locations, setLocations] = useState<string[]>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    async function fetchTrip() {
      const res = await fetch(`/api/trips/${id}`);
      const data = await res.json();

      setTrip({
        ...data,
        startDate: new Date(data.startDate),
        endDate: new Date(data.endDate),
      });

      const numDays = getTripDates(
        new Date(data.startDate),
        new Date(data.endDate)
      ).length;

      setLocations(Array(numDays).fill(""));
    }
    fetchTrip();
  }, [id]);

  if (!trip) {
    return (
      <div className="text-center mt-10 text-textBody font-body text-lg">
        Loading...
      </div>
    );
  }

  function getTripDates(startDate: Date, endDate: Date): Date[] {
    const dates: Date[] = [];
    const currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  }

  const tripDates = getTripDates(trip.startDate, trip.endDate);

  return (
    <>
      <Nav />
      <div className="bg-light-neutral min-h-screen py-10 px-4 font-body text-textBody">
        <h1 className="text-4xl font-header text-primary mb-6 text-center">
          Float Plan
        </h1>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-header text-dark-accent mb-4">
              Trip Details
            </h2>
            <p className="mb-2">
              <strong>River Name:</strong> {trip.riverName}
            </p>
            <p>
              <strong>Dates:</strong> {trip.startDate.toLocaleDateString()} –{" "}
              {trip.endDate.toLocaleDateString()}
            </p>
          </div>

          <div className="space-y-4">
            {tripDates.map((date, i) => (
              <ScheduleDay
                key={date.toISOString()}
                date={date}
                index={i + 1}
                endDate={trip.endDate}
                location={locations[i] || ""}
                onLocationChange={(newLoc) => {
                  const updated = [...locations];
                  updated[i] = newLoc;
                  setLocations(updated);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
