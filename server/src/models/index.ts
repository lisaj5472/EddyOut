import sequelize from '../config/connection.js'
import { TripFactory } from './trip.js'
import { MealFactory } from './meals.js'
import { UserFactory } from './user.js'
import { CrewFactory } from './crew.js'
import { GearListFactory } from './gearlist.js'
import { GearItemFactory } from './gearItem.js'

const Trip = TripFactory(sequelize)
const Crew = CrewFactory(sequelize)
const Meal = MealFactory(sequelize)
const User = UserFactory(sequelize)
const GearList = GearListFactory(sequelize)
const GearItem = GearItemFactory(sequelize)

//Associations between the models

User.hasMany(Trip, { foreignKey: 'organizerId' });
Trip.belongsTo(User, { foreignKey: 'organizerId' });

//TODO each trip has one Meal , Crew , Schedule, Gear associations
Trip.hasMany(Crew, { onDelete: 'CASCADE', as: 'crew' });
Crew.belongsTo(Trip);

Trip.hasMany(GearItem);
GearItem.belongsTo(Trip);
GearItem.belongsTo(User, { foreignKey: 'claimedById' });

Trip.hasMany(Meal);
Meal.belongsTo(Trip);
Meal.belongsTo(User, { foreignKey: 'cookId' });

Trip.hasOne(GearList);
GearList.belongsTo(Trip);

GearList.hasMany(GearItem);
GearItem.belongsTo(GearList);

export { Trip, Crew, Meal, User }