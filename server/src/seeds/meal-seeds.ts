import { Meals } from "../models/meals";


export const seedMeals = async () => {
    await Meals.bulkCreate([
        {
            mealName: "Breakfast Burritos",
            mealType: "Breakfast",
            crewMember: "Justin",
            tripId: 1
        },
        {
            mealType: "Lunch",
            mealName: "Curry Chicken Wrap",
            crewMember: "Lisa",
            tripId: 1
        },
        {
            mealType: "Dinner",
            mealName: "Surf n Turf",
            crewMember: "Justin",
            tripId: 1
        },
        {
            mealType: "Breakfast",
            mealName: "Lox and Bagels",
            crewMember: "Elli",
            tripId: 1
        },
        {
            mealType: "Lunch",
            mealName: "Sesame Noodles",
            crewMember: "Elli",
            tripId: 1
        },
        {
            mealType: "Dinner",
            mealName: "Fancy Mac and Cheese",
            crewMember: "Lisa",
            tripId: 1
        },
    ]);
};