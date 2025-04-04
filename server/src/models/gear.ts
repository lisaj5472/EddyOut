import { DataTypes, type Sequelize, Model, type Optional } from "sequelize";

interface GearAttributes {
    id: number;
    gearitem: string;
    quantity: number;
    crewmember?: string;
}

// Removed GearCreationAttributes as it was redundant

export class Gear extends Model<GearAttributes, Optional<GearAttributes, "id">> implements GearAttributes {
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