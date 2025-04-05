import { useParams, Link } from "react-router-dom";

export default function TripDetails() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold">Trip Details for ID: {id}</h1>
      <div className="space-x-4">
        <Link to={`/trips/${id}/floatplan`} className="btn">
          Float Plan
        </Link>
        <Link to={`/trips/${id}/meals`} className="btn">
          Meals
        </Link>
        <Link to={`/trips/${id}/gear`} className="btn">
          Gear List
        </Link>
        <Link to={`/trips/${id}/crew`} className="btn">
          Crew
        </Link>
      </div>
    </div>
  );
}
