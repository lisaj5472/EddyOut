import { TripFormData } from "../interfaces/TripData";

export async function getTrips() {
  const res = await fetch("/api/trips");
  return res.json();
}

export async function createTrip(tripData: TripFormData) {
  const res = await fetch("/api/trips", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tripData),
  });
  return res.json();
}
