import { User } from '../models/User';

export const seedUser = async () => {
    await User.bulkCreate([
        {
            username: "justinv",
            email: "justin@email.com",
            password: "password",
        },
        {
            username: "lisaj",
            email: "lisa@email.com",
            password: "password",
        },
        {
            username: "ellim",
            email: "elli@email.com",
            password: "password",
        },
    ],
        { individualHooks: true },
    );
};