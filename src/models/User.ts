import { Table, Column, Model } from "sequelize-typescript";
import sequelize from "../database";

@Table
export class User extends Model<User> {
  @Column({ primaryKey: true, autoIncrement: true })
  id!: number;

  @Column
  name!: string;

  @Column({ unique: true })
  email!: string;
}

sequelize.addModels([User]);
export default User;
