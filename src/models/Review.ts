import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import sequelize from "../database";
import { User } from "./User";
import { Item } from "./Item";

@Table
export class Review extends Model<Review> {
  @Column({ primaryKey: true, autoIncrement: true })
  id!: number;

  @Column
  text!: string;

  @Column
  rating!: number;

  @ForeignKey(() => User)
  @Column
  userId!: number;

  @ForeignKey(() => Item)
  @Column
  itemId!: number;

  @BelongsTo(() => User)
  user!: User;

  @BelongsTo(() => Item)
  item!: Item;
}

sequelize.addModels([Review]);
export default Review;
