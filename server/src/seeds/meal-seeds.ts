import { Meals } from "../models/meals";
import type { Trip } from "../models/trip";

export const seedMeals = async (trips: Trip[]) => {
  await Meals.bulkCreate([
    {
      mealName: "Breakfast Burritos",
      mealType: "Breakfast",
      crewMember: "Justin",
      tripId: trips[0].id,
    },
    {
      mealType: "Lunch",
      mealName: "Curry Chicken Wrap",
      crewMember: "Lisa",
      tripId: trips[0].id,
    },
    {
      mealType: "Dinner",
      mealName: "Surf n Turf",
      crewMember: "Justin",
      tripId: trips[0].id,
    },
    {
      mealType: "Breakfast",
      mealName: "Lox and Bagels",
      crewMember: "Elli",
      tripId: trips[0].id,
    },
    {
      mealType: "Lunch",
      mealName: "Sesame Noodles",
      crewMember: "Elli",
      tripId: trips[0].id,
    },
    {
      mealType: "Dinner",
      mealName: "Fancy Mac and Cheese",
      crewMember: "Lisa",
      tripId: trips[0].id,
    },
  ]);
};
