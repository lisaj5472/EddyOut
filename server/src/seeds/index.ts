import { seedCrew } from "./crew-seeds";
import { seedGear } from "./gear-seeds";
import { seedMeals } from "./meal-seeds";
import { seedUser } from "./user-seeds";
import { seedSchedule } from "./schedule-seeds";
import { seedTrip } from "./trip-seeds";
import { sequelize } from "../config/connection.js";


const seedAll = async (): Promise<void> => {
    try {
        await sequelize.sync({ force: true });
        console.log('\n----- DATABASE SYNCED -----\n');

        await seedCrew();
        console.log('\n----- USERS SEEDED -----\n');

        await seedGear();
        console.log('\n----- TICKETS SEEDED -----\n');

        await seedMeals();
        console.log('\n----- TICKETS SEEDED -----\n');

        await seedSchedule();
        console.log('\n----- TICKETS SEEDED -----\n');

        await seedTrip();
        console.log('\n----- TICKETS SEEDED -----\n');

        await seedUser();
        console.log('\n----- TICKETS SEEDED -----\n');

        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedAll();