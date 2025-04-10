import React from "react";
import { useState } from "react";

interface ScheduleDayProps {
  date: Date;
  index: number;
  endDate: Date;
  location: string;
  onLocationChange?: (value: string) => void;
  onSave?: () => void;
  isSaved?: boolean;
}

const ScheduleDay: React.FC<ScheduleDayProps> = ({
  date,
  location,
  index,
  endDate,
  onLocationChange,
  onSave,
  isSaved = false,
}) => {
  const [isEditing, setIsEditing] = useState(!isSaved);

  const handleEditClick = () => setIsEditing(true);
  const handleSaveClick = () => {
    onSave?.();
    setIsEditing(false);
  };

  return (
    <div className="schedule-day-container">
      <h2 className="schedule-day-title">
        {date.getTime() === endDate.getTime() ? "Last Day" : `Day ${index}`}
      </h2>
      <h2 className="schedule-day-date">{date.toLocaleDateString()}</h2>
      <div className="flex items-center gap-2">
        <label className="font-semibold">Campsite:</label>
        {isEditing && onLocationChange ? (
          <>
            <input
              type="text"
              value={location}
              onChange={(e) => onLocationChange(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSaveClick}
              className="btn-dark text-sm px-3 py-1"
            >
              Save
            </button>
          </>
        ) : (
          <>
            <span>{location || "—"}</span>
            <button
              onClick={handleEditClick}
              className="btn-dark text-sm px-3 py-1"
            >
              Edit
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ScheduleDay;
