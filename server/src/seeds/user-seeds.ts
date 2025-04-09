import { User } from '../models/user';

export const seedUser = async () => {
    try {
        await User.bulkCreate([
            {
                id: 1,
                username: "justinv",
                email: "justin@email.com",
                password: "password",
                firstName: "Justin",
                lastName: "Vittitoe"
            },
            {
                id: 2,
                username: "lisaj",
                email: "lisa@email.com",
                password: "password",
            },
            {
                id: 3,
                username: "ellim",
                email: "elli@email.com",
                password: "password",
            },
        ],
            { individualHooks: true },
        );
        console.log("Users seeded successfully");
    } catch (error) {
        console.error("Error seeding users:", error);
    }
}
