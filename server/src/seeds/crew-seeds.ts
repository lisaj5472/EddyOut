import { Crew } from "../models/crew";

export const seedCrew = async () => {
    await Crew.bulkCreate([
        {
            userName: "justinv",
        },
        {
            userName: "lisaj",
        },
        {
            userName: "ellim",
        },
    ]);
};