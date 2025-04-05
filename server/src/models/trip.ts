import { DataTypes, type Sequelize, Model, type Optional } from "sequelize";

interface TripAttributes {
  id: number;
  username: string;
  riverName: string;
  startDate: Date;
  endDate: Date;
  putIn: string;
  takeOut: string;
  crewNum: number;
}

interface TripCreationAttributes extends Optional<TripAttributes, "id"> { }

export class Trip
  extends Model<TripAttributes, TripCreationAttributes>
  implements TripAttributes {
  public id!: number;
  public username!: string;
  public riverName!: string;
  public startDate!: Date;
  public endDate!: Date;
  public putIn!: string;
  public takeOut!: string;
  public crewNum!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function TripFactory(sequelize: Sequelize): typeof Trip {
  Trip.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      riverName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      putIn: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      takeOut: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      crewNum: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Trip",
      tableName: "trips",
      timestamps: true,
    }
  );

  return Trip;
}
