import { seedCrew } from "./crew-seeds";
// import { seedGear } from "./gear-seeds";
import { seedMeals } from "./meal-seeds";
import { seedUser } from "./user-seeds";
import { seedSchedule } from "./schedule-seeds";
import { seedTrip } from "./trip-seeds";
import { sequelize } from "../config/connection";

const seedAll = async (): Promise<void> => {
  try {
    await sequelize.sync({ force: true });
    console.log("\n----- DATABASE SYNCED -----\n");

    await seedUser();
    console.log("\n----- USERS SEEDED -----\n");

    await seedTrip();
    console.log("\n----- TRIPS SEEDED -----\n");

    await seedCrew();
    console.log("\n----- CREW SEEDED -----\n");

    // await seedGear();
    // console.log("\n----- GEAR SEEDED -----\n");

    await seedMeals();
    console.log("\n----- MEALS SEEDED -----\n");

    await seedSchedule();
    console.log("\n----- SCHEDULE SEEDED -----\n");

    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedAll();
