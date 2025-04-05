import { Schedule } from "../models/schedule";

export const seedSchedule = () => {
    await Schedule.bulkCreate([])
};