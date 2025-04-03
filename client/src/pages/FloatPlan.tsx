import { useState } from "react";
import { useEffect } from "react";
import ScheduleDay from "../components/ScheduleDay";
import TripData from "../interfaces/TripData";
import { useParams } from "react-router-dom";

const FloatPlan: React.FC = () => {
  const [trip, setTrip] = useState<TripData | null>(null);
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
    return <div>Loading...</div>;
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
      <Nav></Nav>
      <div>
        <h1>Float Plan</h1>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2>Trip Details</h2>
              <p>River Name: {trip.riverName}</p>
              <p>
                Start Date: {trip.startDate.toLocaleDateString()} to End Date:{" "}
                {trip.endDate.toLocaleDateString()}
              </p>
            </div>
            <div className="col-12 col-md-6">
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
      </div>
    </>
  );
};
