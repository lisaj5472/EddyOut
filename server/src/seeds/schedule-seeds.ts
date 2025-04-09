import { Schedule } from "../models/schedule";

export const seedSchedule = async () => {
    await Schedule.bulkCreate([
        {
            date: new Date('2025-07-31'),
            campsite: 'Lazy River',
            tripId: 1
        },
        {
            date: new Date('2025-08-1'),
            campsite: 'Rolling Tides',
            tripId: 1
        },
        {
            date: new Date('2025-08-2'),
            campsite: 'Happy Beaver',
            tripId: 1
        },

    ])
};