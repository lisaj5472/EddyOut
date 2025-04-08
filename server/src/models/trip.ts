import { DataTypes, type Sequelize, Model, type Optional } from "sequelize";

interface TripAttributes {
  id: number;
  userName: string;
  riverName: string;
  startDate: string;
  endDate: string;
  putIn: string;
  takeOut: string;
  crewNum: number;
}

interface TripCreationAttributes extends Optional<TripAttributes, "id"> { }

export class Trip
  extends Model<TripAttributes, TripCreationAttributes>
  implements TripAttributes {
  public id!: number;
  public userName!: string;
  public riverName!: string;
  public startDate!: string;
  public endDate!: string;
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
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      riverName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      startDate: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isBeforeEndDate(value: string) {
            if (new Date(value) >= new Date(this.endDate as string)) {
              throw new Error('Start date must be before the end date');
            }
          },
        },
      },
      endDate: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAfterStartDate(value: string) {
            if (new Date(value) <= new Date(this.startDate as string)) {
              throw new Error('End date must be after the start date');
            }
          },
        },
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
