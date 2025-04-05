import { DataTypes, type Sequelize, Model, type Optional } from "sequelize";

interface GearItemAttributes {
    id: number;
    gearItem: string;
    quantity: number;
    claimedBy?: number;
    gearListId:number;
    // gearListId: number;

}

// EM: This warning appears to be a false positive warning on the UserCreationAttributes, leaving warning for now.
interface GearItemCreationAttributes extends Optional<GearItemAttributes, "id" | "claimedBy"> { }


export class GearItem
    extends Model<GearItemAttributes, GearItemCreationAttributes>
    implements GearItemAttributes {
    public id!: number;
    public gearItem!: string;
    public quantity!: number;
    public claimedBy?: number;
    public gearListId!: number;
    // public gearListId!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export function GearItemFactory(sequelize: Sequelize): typeof GearItem {
    GearItem.init({
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
        claimedBy: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        gearListId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
        sequelize,
        tableName: "GearItems",
        timestamps: true,
    }
    );
    return GearItem;
}