import { Crew } from "../models/crew";

export const seedCrew = async () => {
  try {
    await Crew.bulkCreate([
      {
        username: "justinv",
        email: "justin@email.com",
        tripName: "Happy",
        tripId: 1,
      },
      {
        username: "lisaj",
        email: "lisaj@email.com",
        tripName: "Happy",
        tripId: 1,
      },
      {
        username: "ellim",
        email: "ellim@email.com",
        tripName: "Happy",
        tripId: 1,
      },
    ],
      { individualHooks: true }
    );
    console.log("Crew seed data inserted successfully.");
  } catch (error) {
    console.error("Error seeding crew data:", error);
  }
};
