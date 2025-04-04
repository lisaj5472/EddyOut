import { Gear } from "../models/gear";

export const seedGear = async () => {
    await Gear.bulkCreate([
        {
            gearItem: "Stove",
            quantity: 1,
            crewMember: "Lisa"
        },
        {
            gearItem: "Water Jugs",
            quantity: 7,
            crewMember: "Lisa"
        },
        {
            gearItem: "Table",
            quantity: 3,
            crewMember: "Justin"
        },
        {
            gearItem: "Groover",
            quantity: 1,
            crewMember: "Elli"
        },
        {
            gearItem: "Toilet Paper Rolls",
            quantity: 5000,
            crewMember: "Elli"
        },
        {
            gearItem: "Sun Shelter",
            quantity: 1,
            crewMember: "Justin"
        },
    ]);
};