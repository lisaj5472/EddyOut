import { DataTypes, type Sequelize, Model, type Optional } from "sequelize";

interface TripAttributes {
  id: number;
  tripname: string;
  startdate: string;
  enddate: string;
  putin: string;
  takeout: string;
  crewnum: number;
}

interface TripCreationAttributes extends Optional<TripAttributes, "id"> {}

export class Trip
  extends Model<TripAttributes, TripCreationAttributes>
  implements TripAttributes
{
  public id!: number;
  public tripname!: string;
  public startdate!: string;
  public enddate!: string;
  public putin!: string;
  public takeout!: string;
  public crewnum!: number;

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
      tripname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      startdate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      enddate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      putin: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      takeout: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      crewnum: {
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
