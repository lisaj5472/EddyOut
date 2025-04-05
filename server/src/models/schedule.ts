import { DataTypes, type Sequelize, Model, type Optional } from "sequelize";

interface ScheduleAttributes {
    id: number;
    date: string;
    campsite: string;
}

interface ScheduleCreationAttributes extends Optional<ScheduleAttributes, "id"> { }

export class Schedule {

}

export function ScheduleFactory(sequelize: Sequelize): typeof Schedule {
    Schedule.init({

    },
        {
            tableName: 'schedule',
            sequelize,
        }
    );
    return Schedule;
}