import { Model, Optional } from "sequelize";

interface UserAttributes {
  id: number;
  name: string;
  phone_number: string;
  birth_date: Date;
  gender: string;
  city: string;
  address: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

interface UserInstance
  extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {
  createInstaAccount(body: any): unknown;
  createdAt?: Date;
  updatedAt?: Date;
}

export { UserInstance };
