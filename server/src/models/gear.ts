import { DataTypes, type Sequelize, Model, type Optional } from "sequelize";

interface GearAttributes {
    id: number;
    gearItem: string;
    quantity: number;
    crewMember?: string;
}


// Removed GearCreationAttributes as it was redundant

//TODO create meal array

// interface GearCreationAttributes extends Optional<GearAttributes, "id"> { }


export class Gear extends Model<GearAttributes, Optional<GearAttributes, "id">> implements GearAttributes {
    public id!: number;
    public gearItem!: string;
    public quantity!: number;
    public crewMember!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export function GearFactory(sequelize: Sequelize): typeof Gear {
    Gear.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        gearItem: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        crewMember: {
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