import React, { useEffect, useState } from "react";
import { GearItem as GearItemType } from "../interfaces/GearData";
import GearItem from "./GearItem";
import AddGearForm from "./AddGearForm";

interface GearListProps {
    tripId: number;
    userId: number; 
    isOrganizer: boolean;
}

const GearList: React.FC<GearListProps> = ({ tripId, userId, isOrganizer }) => {
    const [gearList, setGearList] = useState<GearItemType[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchGear = async () => {
        try {
            const response = await fetch('/api/gear/${tripId}');
            const data = await response.json();
            setGearList(data);
        } catch (error) {
            console.error("Error fetching gear:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchGear();
    }, [tripId]);

    return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Gear List</h2>
      {isOrganizer && <AddGearForm tripId={tripId} onGearAdded={fetchGear} />}

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-2">
          {gearList.map((item) => (
            <GearItem
              key={item.id}
              item={item}
              userId={userId}
              onUpdate={fetchGear}
            />
          ))}
        </ul>
      )}
    </section>
    );
};
export default GearList;
