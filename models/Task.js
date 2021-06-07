const {Model, DataType, DataTypes} = require("sequelize"),
const sequelize = require("../config/connection")

class Task extends Model{};

Task.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        project_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        project_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            references: {
                model: 'project',
                key: 'id'
            }
        },
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "task"
    }

);





module.exports = Task;



