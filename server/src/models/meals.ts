import { DataTypes, type Sequelize, Model, type Optional } from "sequelize";

type mealType = "Breakfast" | "Lunch" | "Dinner";

interface MealAttributes {
  id: number;
  mealName: string;
  mealType: mealType;
  crewMember: string;
  tripId: number;
}

//TODO create breakfast lunch and dinner objects

interface MealCreationAttributes extends Optional<MealAttributes, "id"> {}

export class Meals extends Model<MealAttributes, MealCreationAttributes> {
  public id!: number;
  public mealName!: string;
  public crewMember!: string;
  public tripId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function MealFactory(sequelize: Sequelize): typeof Meals {
  Meals.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      mealName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mealType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      crewMember: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      tripId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "meal",
    }
  );

  return Meals;
}
