import { Schedule } from "../models/schedule";
import { Trip } from "../models/trip";

export const seedSchedule = async (trips: Trip[]) => {
  await Schedule.bulkCreate([
    {
      date: new Date("2025-07-31"),
      campsite: "Lazy River",
      tripId: trips[0].id,
    },
    {
      date: new Date("2025-08-1"),
      campsite: "Rolling Tides",
      tripId: trips[0].id,
    },
    {
      date: new Date("2025-08-2"),
      campsite: "Happy Beaver",
      tripId: trips[0].id,
    },
  ]);
};
