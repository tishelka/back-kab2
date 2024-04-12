import {
  Table,
  Column,
  Model,
  AllowNull,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import sequelize from "../database";
import { Brand } from "./Brand";

@Table
export class Item extends Model<Item> {
  @Column({ primaryKey: true, autoIncrement: true })
  id!: number;

  @Column
  name!: string;

  @Column
  imgUrl!: string;

  @Column
  price!: number;

  @ForeignKey(() => Brand)
  @Column
  brandId!: number;

  @BelongsTo(() => Brand)
  brand!: Brand;

  @Column
  rating!: number;
}

sequelize.addModels([Item]);
export default Item;
