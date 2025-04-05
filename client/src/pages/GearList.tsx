import React, { useEffect, useState } from "react";
import { GearItem as GearItemInterface } from "../interfaces/GearItemData";
import GearItem from "../components/GearItem";
import { useParams } from "react-router-dom";
// import AddGearForm from "./AddGearForm";

// interface GearListProps {
//     tripId: number;
//     userId: number;
// }

const GearList: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const tripId = parseInt(id || "0");
  const userId = 1;

  const [gearItems, setGearItems] = useState<GearItemInterface[]>([]); // Array of gear items
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch gear items for the trip
  const fetchGearItems = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/trips/${tripId}/gear`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch gear items");
      }
      const data: GearItemInterface[] = await response.json();
      setGearItems(data);
    } catch (error) {
      console.error("Error fetching gear items:", error);
    } finally {
      setLoading(false);
    }
  };

  // Toggle claim status
  const handleClaimToggle = async (itemId: number) => {
    try {
      await fetch(`/api/gear/${itemId}/claim`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      });
      fetchGearItems(); // Refresh the gear list after toggling claim
    } catch (error) {
      console.error("Error toggling claim:", error);
    }
  };

  useEffect(() => {
    fetchGearItems();
  }, [tripId]);

  if (loading) {
    return <p>Loading gear items...</p>;
  }

  if (!gearItems || gearItems?.length === 0) {
    return <p>No gear items found for this trip.</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Gear List</h1>
      <ul className="space-y-2">
        {gearItems.map((item) => (
          <GearItem
            key={item.id}
            item={item}
            userId={userId}
            onClaimToggle={handleClaimToggle}
          />
        ))}
      </ul>
    </div>
  );
};

export default GearList;
