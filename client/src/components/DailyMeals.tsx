import React from "react";
import { MealData } from "../interfaces/MealData";

const MEAL_TYPES = ["Breakfast", "Lunch", "Dinner"] as const;

interface DailyMealsProps {
  date: Date;
  meal: MealData;
  index: number;
  endDate: Date;
  onMealChange?: (field: keyof MealData, value: string) => void;
}

const DailyMeals: React.FC<DailyMealsProps> = ({
  date,
  meal,
  index,
  endDate,
  onMealChange,
}) => {
  return (
    <div>
      <h2>
        {date.getTime() === endDate.getTime() ? "Last Day" : `Day ${index}`}
      </h2>
      <h2>{date.toLocaleDateString()}</h2>
      <h3>
        Meal: {""}
        {onMealChange ? (
          <select
            value={meal.mealType || ""}
            onChange={(e) => onMealChange("mealType", e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Select Which Meal --</option>
            {MEAL_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        ) : (
          meal.mealType || ""
        )}
      </h3>
      <h3>
        What are we eating? {""}
        {onMealChange ? (
          <input
            type="text"
            value={meal.mealName || ""}
            onChange={(e) => onMealChange("mealName", e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ) : (
          meal.mealName || ""
        )}
      </h3>
      <h3>
        Who is bringing it? {""}
        {onMealChange ? (
          <input
            type="text"
            value={meal.crewMember || ""}
            onChange={(e) => onMealChange("crewMember", e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ) : (
          meal.crewMember || ""
        )}
      </h3>
    </div>
  );
};

export default DailyMeals;
