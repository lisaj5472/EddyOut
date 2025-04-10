import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import ScheduleDay from "../components/ScheduleDay";
import { TripData } from "../interfaces/TripData";
import { fetchScheduleForTrip } from "../api/scheduleAPI";
import { toDateOnlyString } from "../utils/transformTrip";

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
    async function loadSchedule() {
      if (!trip?.id) return;
      console.log("Trip ID:", trip.id);

      try {
        const tripDates = getTripDates(trip.startDate, trip.endDate);
        const schedule = await fetchScheduleForTrip(trip.id);

        console.log("🎯 Raw schedule response from API:");
        schedule.forEach((item, idx) => {
          console.log(`[${idx}]`, {
            date: item.date,
            normalized: new Date(item.date).toISOString().split("T")[0],
            location: item.campsite,
            tripId: item.tripId,
          });
        });

        const filled = tripDates.map((date, i) => {
          const formattedTripDate = toDateOnlyString(date);

          const item = schedule.find((s) => {
            const formattedScheduleDate = toDateOnlyString(s.date);
            console.log(
              `🆚 Comparing: tripDate = ${formattedTripDate} | scheduleDate = ${formattedScheduleDate}`
            );
            return formattedScheduleDate === formattedTripDate;
          });

          console.log(`✅ Matched for ${formattedTripDate}:`, item?.campsite);

          return {
            location: item?.campsite || "",
            tripId: trip.id,
          };
        });

        setLocations(filled);
      } catch (err) {
        console.error("Error loading schedule:", err);
      }
    }

    loadSchedule();
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
        Campsite Schedule
      </h1>

      <div className="floatplan-content">
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
