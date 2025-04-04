import { DataTypes, type Sequelize, Model, type Optional } from "sequelize";
import { Trip } from "./trip";

//Create the items that are unique to crew
interface CrewAttributes {
    id: number;
    username: string;
    email: string;
    tripName: string;
    tripId:number;
}



//extends the trip information associated with the crew member
export class Crew extends Model<CrewAttributes, Trip> {
    public id!: string;
    public username!: string;
    public email!: string;
    public tripName!: string;
    public tripId!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;    
}

export function CrewFactory(sequelize: Sequelize): typeof Crew {
    Crew.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey:true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tripName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tripId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
{
    tableName: 'crew',
    sequelize,
});
return Crew
}