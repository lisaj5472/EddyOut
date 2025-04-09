import { User } from "../models/user";
import { sequelize } from "../config/connection";

export const seedUser = async () => {
  try {
    await User.bulkCreate(
      [
        {
          username: "justinv",
          email: "justin@email.com",
          password: "password",
          firstName: "Justin",
          lastName: "Vittitoe",
        },
        {
          username: "lisaj",
          email: "lisa@email.com",
          password: "password",
          firstName: "Lisa",
          lastName: "Jorgensen",
        },
        {
          username: "ellim",
          email: "elli@email.com",
          password: "password",
          firstName: "Elli",
          lastName: "Mckinley",
        },
      ],
      { individualHooks: true }
    );
    console.log("Users seeded successfully");
  } catch (error) {
    console.error("Error seeding users:", error);
  }
  await sequelize.query(`
        SELECT setval(
          pg_get_serial_sequence('"users"', 'id'),
          (SELECT MAX(id) FROM "users")
        );
      `);
};
