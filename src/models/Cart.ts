import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  HasMany,
} from "sequelize-typescript";
import sequelize from "../database";
import { User } from "./User";
import { Item } from "./Item";

@Table
export class Cart extends Model<Cart> {
  @Column({ primaryKey: true, autoIncrement: true })
  id!: number;

  @ForeignKey(() => User)
  @Column
  userId!: number;

  @ForeignKey(() => Item)
  @Column
  itemId!: number;

  @Column
  quantity!: number;

  @BelongsTo(() => User)
  user!: User;

  @HasMany(() => Item)
  item!: Item;
}

sequelize.addModels([Cart]);
export default Cart;
