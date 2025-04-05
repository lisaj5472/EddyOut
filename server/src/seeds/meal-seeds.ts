import { Meals } from "../models/meals";


export const seedMeals = async () => {
    await Meals.bulkCreate([
        {
            id: 1,
            mealName: "Breakfast Burritos",
            mealType: "Breakfast",
            crewMember: "Justin",
            tripId: 1
        },
        {
            id: 2,
            mealType: "Lunch",
            mealName: "Curry Chicken Wrap",
            crewMember: "Lisa",
            tripId: 1
        },
        {
            id: 3,
            mealType: "Dinner",
            mealName: "Surf n Turf",
            crewMember: "Justin",
            tripId: 1
        },
        {
            id: 4,
            mealType: "Breakfast",
            mealName: "Lox and Bagels",
            crewMember: "Elli",
            tripId: 1
        },
        {
            id: 5,
            mealType: "Lunch",
            mealName: "Sesame Noodles",
            crewMember: "Elli",
            tripId: 1
        },
        {
            id: 6,
            mealType: "Dinner",
            mealName: "Fancy Mac and Cheese",
            crewMember: "Lisa",
            tripId: 1
        },
    ]);
};