import { Model, Optional } from "sequelize";

interface instaAccountAttributes {
  id: number;
  userId: number;
  user_name: string;
  url: string;
  password: string;
}

interface instaAccountCreationAttributes
  extends Optional<instaAccountAttributes, "id"> {}

interface instaAccountInstance
  extends Model<instaAccountAttributes, instaAccountCreationAttributes>,
    instaAccountAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

export { instaAccountInstance };
