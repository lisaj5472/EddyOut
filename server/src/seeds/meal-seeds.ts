import { Meals } from "../models/meals";


export const seedMeals = async () => {
    await Meals.bulkCreate([
        {
            mealType: "Breakfast",
            mealName: "Breakfast Burritos",
            crewMember: "Justin",
        },
        {
            mealType: "Lunch",
            mealName: "Curry Chicken Wrap",
            crewMember: "Lisa",
        },
        {
            mealType: "Dinner",
            mealName: "Surf n Turf",
            crewMember: "Justin",
        },
        {
            mealType: "Breakfast",
            mealName: "Lox and Bagels",
            crewMember: "Elli",
        },
        {
            mealType: "Lunch",
            mealName: "Sesame Noodles",
            crewMember: "Elli",
        },
        {
            mealType: "Dinner",
            mealName: "Fancy Mac and Cheese",
            crewMember: "Lisa",
        },
    ]);
};