import sequelize from '../config/connection.js'
import { TripFactory } from './trip.js'
import { MealFactory } from './meals.js'
import { UserFactory } from './user.js'
import { CrewFactory } from './crew.js'

const Trip = TripFactory(sequelize)
const Crew = CrewFactory(sequelize)
const Meal = MealFactory(sequelize)
const User = UserFactory(sequelize)

//Associations between the models

User.hasMany(Trip, {
    onDelete:'CASCADE'
});
Trip.belongsTo(User);

//TODO each trip has one Meal , Crew , Schedule, Gear associations
Trip.hasMany(Crew, {
    onDelete:'CASCADE',
    as: 'crew'
});
Crew.belongsTo(Trip);


export { Trip, Crew, Meal, User }