import { DataTypes, type Sequelize, Model, type Optional } from "sequelize";


interface MealAttributes {
    id:number;
    mealName:number;
    crewMember:string;
    tripName:string;
    tripid:number;
}

interface MealCreationAttributes extends Optional<MealAttributes, 'id'> {}

export class Meals
extends Model<MealAttributes, MealCreationAttributes> {
    public id!: number;
    public mealName!: string;
    public crewMember!: string;
    public tripname: string;
    public tripid!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export function MealFactory(sequelize: Sequelize):typeof Meals {
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
            crewMember: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            tripName: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            tripid: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            
        },
        {
            sequelize,
            timestamps: false,
            modelName: 'meal',
        }
    );

    return Meals;
}