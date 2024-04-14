import { Table, Column, Model, HasMany, HasOne } from "sequelize-typescript";
import sequelize from "../database";
import { Review } from "./Review";
import { Cart } from "./Cart";

@Table
export class User extends Model<User> {
  @Column({ primaryKey: true, autoIncrement: true })
  id!: number;

  @Column
  name!: string;

  @Column({ unique: true })
  email!: string;

  @HasMany(() => Review)
  reviews!: Review[];

  @HasOne(() => Cart)
  cart!: Cart;
}

sequelize.addModels([User]);
export default User;
