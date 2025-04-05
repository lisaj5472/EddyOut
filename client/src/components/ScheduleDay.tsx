import React from "react";

interface ScheduleDayProps {
  date: Date;
  index: number;
  endDate: Date;
  location: string;
  onLocationChange?: (value: string) => void;
}

const ScheduleDay: React.FC<ScheduleDayProps> = ({
  date,
  location,
  index,
  endDate,
  onLocationChange,
}) => {
  return (
    <div className="schedule-day">
      <h2>
        {date.getTime() === endDate.getTime() ? "Last Day" : `Day ${index}`}
      </h2>
      <h2>{date.toLocaleDateString()}</h2>
      <h3>
        Campsite: {""}
        {onLocationChange ? (
          <input
            type="text"
            value={location}
            onChange={(e) => onLocationChange(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ) : (
          location
        )}
      </h3>
    </div>
  );
};

export default ScheduleDay;
