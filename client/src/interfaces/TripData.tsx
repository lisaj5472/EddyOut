export interface TripFormData {
  id: number;
  riverName: string;
  startDate: string;
  endDate: string;
  putIn: string;
  takeOut: string;
  crewNum: number;
}

export interface TripData {
  id: number;
  riverName: string;
  startDate: Date;
  endDate: Date;
  putIn: string;
  takeOut: string;
  crewNum: number;
}
