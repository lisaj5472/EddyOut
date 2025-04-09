import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import ScheduleDay from "../components/ScheduleDay";
import { TripData } from "../interfaces/TripData";

export default function FloatPlan() {
  const { trip } = useOutletContext<{ trip: TripData }>();
  const [locations, setLocations] = useState<
    { location: string; tripId: string }[]
  >([]);

  function getTripDates(startDate: Date, endDate: Date): Date[] {
    const dates: Date[] = [];
    const currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  }

  useEffect(() => {
    if (trip) {
      const tripDates = getTripDates(trip.startDate, trip.endDate);
      setLocations(
        Array(tripDates.length).fill({ location: "", tripId: trip.id })
      );
    }
  }, [trip]);

  if (!trip) {
    return (
      <div className="text-center mt-10 text-textBody font-body text-lg">
        Loading...
      </div>
    );
  }

  const tripDates = getTripDates(trip.startDate, trip.endDate);

  return (
    <div className="bg-light-neutral min-h-screen py-10 px-4 font-body text-textBody">
      <h1 className="text-4xl font-header text-primary mb-6 text-center">
        Float Plan
      </h1>

      <div className="col-12 col-md-6 overflow-y-auto max-h-[80vh] pr-2">
        {tripDates.map((date, i) => (
          <ScheduleDay
            key={date.toISOString()}
            date={date}
            index={i + 1}
            endDate={trip.endDate}
            location={locations[i]?.location || ""}
            onLocationChange={(newLoc) => {
              const updated = [...locations];
              updated[i] = { location: newLoc, tripId: trip.id };
              setLocations(updated);
            }}
          />
        ))}
      </div>
    </div>
  );
}
