import React, { useState } from "react";
import { TripData, TripFormData } from "../interfaces/TripData";
import transformTrip from "../utils/transformTrip";
import { v4 as uuidv4 } from "uuid";

const NewTrip = () => {
  const [tripData, setTripData] = useState<TripFormData>({
    riverName: "",
    startDate: "",
    endDate: "",
    putIn: "",
    takeOut: "",
    crewNum: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTripData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const tripWithId: TripFormData = {
      ...tripData,
      id: uuidv4(), // Generate a unique ID for the trip
    };
    const transformedTrip: TripData = transformTrip(tripWithId);

    console.log("Submitted trip:", transformedTrip);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-white shadow rounded"
    >
      <h2 className="text-xl font-bold mb-4">Create a New Trip</h2>

      <label className="block mb-2">
        River:
        <input
          type="text"
          name="riverName"
          value={tripData.riverName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </label>

      <label className="block mb-2">
        Start Date:
        <input
          type="date"
          name="startDate"
          value={tripData.startDate}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </label>

      <label className="block mb-2">
        End Date:
        <input
          type="date"
          name="endDate"
          value={tripData.endDate}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </label>

      <label className="block mb-2">
        Put In:
        <input
          type="text"
          name="putIn"
          value={tripData.putIn}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </label>

      <label className="block mb-2">
        Take Out:
        <input
          type="text"
          name="takeOut"
          value={tripData.takeOut}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </label>

      <label className="block mb-2">
        Crew Size:
        <input
          type="number"
          name="crewNum"
          value={tripData.crewNum}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </label>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit Trip
      </button>
    </form>
  );
};

export default NewTrip;
