import React from "react";

interface ScheduleDayProps {
  date: Date;
  location: string;
  index: number;
  endDate: Date;
  onLocationChange?: (newLocation: string) => void;
}

const ScheduleDay: React.FC<ScheduleDayProps> = ({
  date,
  location,
  index,
  endDate,
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
          />
        ) : (
          location
        )}
      </h3>
    </div>
  );
};

export default ScheduleDay;
