import { DataTypes } from "sequelize";
import { sequelize } from ".";
import { instaAccountInstance } from "../interfaces/insta-account";
const InstaAccount = sequelize.define<instaAccountInstance>("InstaAccount", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Users",
      key: "id",
    },
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  },
  user_name: {
    type: DataTypes.STRING,
    unique: true,
  },
  url: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
});

export default InstaAccount;
