import { Crew } from "../models/crew";

export const seedCrew = async () => {
  await Crew.bulkCreate([
    {
      id: 1,
      username: "justinv",
      email: "justin@email.com",
      tripName: "Happy",
      tripId: 1,
    },
    {
      id: 2,
      username: "lisaj",
      email: "lisaj@email.com",
      tripName: "Happy",
      tripId: 1,
    },
    {
      id: 3,
      username: "ellim",
      email: "ellim@email.com",
      tripName: "Happy",
      tripId: 1,
    },
  ]);
};
