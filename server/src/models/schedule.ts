import { DataTypes, type Sequelize, Model, type Optional } from "sequelize";

interface ScheduleAttributes {
    id: number;
    date: Date;
    campsite: string;
    tripId:number;
}

interface ScheduleCreationAttributes extends Optional<ScheduleAttributes, "id"> { }

export class Schedule 
extends Model<ScheduleAttributes, ScheduleCreationAttributes> {
    public id!: number;
    public date!: Date;
    public campsite!: string;
    public tripId!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export function ScheduleFactory(sequelize: Sequelize): typeof Schedule {
    Schedule.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        campsite: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tripId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
        {
            tableName: 'schedule',
            sequelize,
        }
    );
    return Schedule;
}