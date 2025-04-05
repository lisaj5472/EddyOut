import { DataTypes, type Sequelize, Model, type Optional } from "sequelize";

interface GearListAttributes {
    id: number;
    gearList: string;
    tripId: number;
}

// EM: This warning appears to be a false positive warning on the UserCreationAttributes, leaving warning for now.
interface GearListCreationAttributes extends Optional<GearListAttributes, "id"> { }


export class GearList
    extends Model<GearListAttributes, GearListCreationAttributes>
    implements GearListAttributes {
    public id!: number;
    public gearList!: string;
    public tripId!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export function GearListFactory(sequelize: Sequelize): typeof GearList {
    GearList.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        gearList: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tripId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
        sequelize,
        tableName: "GearLists",
        timestamps: true,
    }
    );
    return GearList;
}