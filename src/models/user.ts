import { DataTypes } from "sequelize";
import { sequelize } from ".";
import { UserInstance } from "../interfaces/user";
import InstaAccount from "./insta-account";
const User = sequelize.define<UserInstance>("User", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
  },
  phone_number: {
    type: DataTypes.STRING,
  },
  birth_date: {
    type: DataTypes.DATE,
  },
  gender: {
    type: DataTypes.ENUM,
    values: ["male", "female", "other"],
  },
  city: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
  },
});

User.hasMany(InstaAccount, {
  foreignKey: "userId",
});
InstaAccount.belongsTo(User, {
  foreignKey: "userId",
});

export default User;
