import { DataTypes, type Sequelize, Model, type Optional } from "sequelize";
// import { Gear } from "./gear"
import { Trip } from "./trip";

interface GearAttributes {
    id: number;
    gearitem: string;
    quantity: number;
    crewmember?: string;
}

interface GearCreationAttributes extends Optional<GearAttributes, "id"> { }

export class Gear extends Model<GearAttributes, GearCreationAttributes> implements GearAttributes {
    public id!: number;
    public gearitem!: string;
    public quantity!: number;
    public crewmember!: string;

    public readonly createdAt: Date;
    public readonly updatedAt: Date;
}

export function GearFactory(sequelize: Sequelize): typeof Gear {
    Gear.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        gearitem: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        crewmember: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
        sequelize,
        tableName: "Gear",
        timestamps: true,
    }
    );
    return Gear;
}