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
<<<<<<< HEAD
    {
      sequelize,
      modelName: "Trip",
      tableName: "trips",
      timestamps: true,
    }
  );

=======
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
>>>>>>> 77ab8c5dacde23109caee124124ff4b30e1159c3
  return Trip;
}
