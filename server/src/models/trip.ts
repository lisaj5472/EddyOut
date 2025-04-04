import { DataTypes, type Sequelize, Model, type Optional } from "sequelize";

interface TripAttributes {
  id: number;
  tripName: string;
  startDate: string;
  endDate: string;
  putIn: string;
  takeOut: string;
  crewNum: number;
}



interface TripCreationAttributes extends Optional<TripAttributes, "id"> {}

export class Trip
  extends Model<TripAttributes, TripCreationAttributes>
  implements TripAttributes
{
  public id!: number;
  public tripName!: string;
  public startDate!: string;
  public endDate!: string;
  public putIn!: string;
  public takeOut!: string;
  public crewNum: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function TripFactory(sequelize: Sequelize): typeof Trip {
  Trip.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    tripName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.STRING,
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
    },
  },
  {
    tableName: 'trips',
    sequelize,
  }
);
  return Trip;
}
