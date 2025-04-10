export interface ScheduleItem {
  id: string;
  tripId: string;
  day: number;
  campsite: string;
  date: string;
}

export async function fetchScheduleForTrip(
  tripId: string
): Promise<ScheduleItem[]> {
  const token = localStorage.getItem("id_token");
  if (!token) {
    throw new Error("No token found in local storage");
  }

  if (!tripId) {
    throw new Error("No tripId provided to fetchScheduleForTrip");
  }

  const url = `/api/schedule/${tripId}`;
  console.log("Fetching from URL:", url); //

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch schedule");
  }
  return res.json();
}
