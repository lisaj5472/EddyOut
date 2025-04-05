import { GearItem } from "../models/gearItem";

export const seedGear = async () => {
    await GearItem.bulkCreate([
        {
            id: 1,
            gearItem: "Stove",
            quantity: 1,
            claimedBy: 2,
            gearListId: 1,
        },
        {
            id: 2,
            gearItem: "Water Jugs",
            quantity: 7,
            claimedBy: 2,
            gearListId: 1,
        },
        {
            id: 3,
            gearItem: "Table",
            quantity: 3,
            claimedBy: 1,
            gearListId: 1,
        },
        {
            id: 4,
            gearItem: "Groover",
            quantity: 1,
            claimedBy: 3,
            gearListId: 1,
        },
        {
            id: 5,
            gearItem: "Toilet Paper Rolls",
            quantity: 5000,
            claimedBy: 3,
            gearListId: 1,
        },
        {
            id: 6,
            gearItem: "Sun Shelter",
            quantity: 1,
            claimedBy: 1,
            gearListId: 1,
        },
    ]);
};