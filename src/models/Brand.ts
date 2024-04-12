import { Table, Column, Model } from "sequelize-typescript";
import sequelize from "../database";

@Table
export class Brand extends Model<Brand> {
  @Column({ primaryKey: true, autoIncrement: true })
  id!: number;

  @Column
  name!: string;
}

sequelize.addModels([Brand]);
export default Brand;
