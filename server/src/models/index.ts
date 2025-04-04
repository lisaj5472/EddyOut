import sequelize from '../config/connection.js'
import { TripFactory } from './trip.js'
import { MealFactory } from './meals.js'
import { UserFactory } from './user.js'
import { CrewFactory } from './crew.js'

const Trip = TripFactory(sequelize)
const Crew = CrewFactory(sequelize)
const Meal = MealFactory(sequelize)
const User = UserFactory(sequelize)




export { Trip, Crew, Meal, User }