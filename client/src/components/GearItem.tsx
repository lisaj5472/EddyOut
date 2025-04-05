import React
// update path
import { GearItem as GearItemType } from "../";

interface GearItemProps {
  item: GearItemType;
  userId: number;
  onUpdate: () => void;
}

const GearItem: React.FC<GearItemProps> = ({ item, userId, onUpdate }) => {
  const isClaimed = !!item.claimedBy;
  const claimedByYou = item.claimedBy?.id === userId;

  const handleClaimToggle = async () => {
    try {
      await fetch(`/api/gear/${item.id}/claim`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: claimedByYou ? null : userId }),
      });
      onUpdate();
    } catch (error) {
      console.error("Error updating claim status:", error);
    }
  };

  return (
    <li className="flex justify-between items-center border p-2 rounded">
      <div>
        <p className="font-medium">{item.name}</p>
        {isClaimed && (
          <p className="text-sm text-gray-600">
            Claimed by {claimedByYou ? "you" : item.claimedBy?.name}
          </p>
        )}
      </div>
      <button
        onClick={handleClaimToggle}
        className={`px-3 py-1 text-sm rounded ${
          claimedByYou
            ? "bg-red-100 hover:bg-red-200"
            : "bg-green-100 hover:bg-green-200"
        }`}
      >
        {claimedByYou ? "Unclaim" : "Claim"}
      </button>
    </li>
  );
};

export default GearItem;