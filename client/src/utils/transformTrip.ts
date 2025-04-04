import type { TripFormData, TripData } from "../interfaces/TripData";

function convertFormToTripData(formData: TripFormData): TripData {
  return {
    ...formData,
    startDate: new Date(formData.startDate),
    endDate: new Date(formData.endDate),
    id: formData.id,
  };
}

export default convertFormToTripData;
