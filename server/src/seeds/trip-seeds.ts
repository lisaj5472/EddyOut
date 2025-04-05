import { Trip } from '../models/trip';

export const seedTrip = async () => {
    try {
        await Trip.bulkCreate([
            {
                id: 1,
                riverName: "San Juan River",
                startDate: new Date("2024-06-06"),
                endDate: new Date("2024-06-13"),
                putIn: "Sand Island",
                takeOut: "Clay Hills",
                crewNum: 12,
            },
            {
                id: 2,
                riverName: "Gates of Lodore",
                startDate: new Date("2025-07-06"),
                endDate: new Date("2025-07-11"),
                putIn: "Lodore Ranger Station",
                takeOut: "Split Mountain",
                crewNum: 8,
            },
            {
                id: 3,
                riverName: "Middle Fork of the Salmon",
                startDate: new Date("2025-05-30"),
                endDate: new Date("2025-06-04"),
                putIn: "Boundary Creek",
                takeOut: "Cache Bar",
                crewNum: 7,
            },

        ],
            { individualHooks: true },
        );
        console.log("Trips seeded successfully");
    } catch (error) {
        console.error("Error seeding trips:", error);
    }
}