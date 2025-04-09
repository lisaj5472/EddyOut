import { DataTypes, type Sequelize, Model, type Optional } from "sequelize";

type mealType = "Breakfast" | "Lunch" | "Dinner";

interface MealAttributes {
  id: string;
  mealName: string;
  mealType: mealType;
  crewMember: string;
  tripId: string;
}

//TODO create breakfast lunch and dinner objects

interface MealCreationAttributes extends Optional<MealAttributes, "id"> {}

export class Meals extends Model<MealAttributes, MealCreationAttributes> {
  public id!: string;
  public mealName!: string;
  public crewMember!: string;
  public tripId!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function MealFactory(sequelize: Sequelize): typeof Meals {
  Meals.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
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
        // unique: true,
      },
      tripId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "trips",
          key: "id",
        },
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
