import { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";

const Employee = sequelize.define(
  "employee",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    phone_number: {
      type: DataTypes.STRING,
    },
    position: {
      type: DataTypes.ENUM(
        "manager",
        "cashier",
        "staff",
        "cleaner",
        "technician"
      ),
      allowNull: false,
      defaultValue: "staff",
    },
    salary: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    hire_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: "employees",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);
// Employee.associate = (models) => {
//   Employee.hasMany(models.EmployeeSchedule, { foreignKey: "employee_id" });
// };

export default Employee;
