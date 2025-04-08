import { TripData } from "../interfaces/TripData";

export default function TripSummaryCard({ trip }: { trip: TripData }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6 max-w-2xl mx-auto text-center">
      <h1 className="text-3xl font-bold text-primary mb-2">
        River: {trip.riverName}
      </h1>
      <p className="text-md text-gray-700">
        Start Date: {trip.startDate.toLocaleDateString()} to End Date:{" "}
        {trip.endDate.toLocaleDateString()}
      </p>
    </div>
  );
}
