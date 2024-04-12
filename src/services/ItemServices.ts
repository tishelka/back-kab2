import Item from "../models/Item";
import { Repository } from "sequelize-typescript";
import { Sequelize } from "sequelize-typescript";

export default class ItemService {
  private static itemRepository: Repository<Item>;
  static initialize(sequelizeInstance: Sequelize): void {
    ItemService.itemRepository = sequelizeInstance.getRepository(Item);
  }
  static async getAllItems() {
    return this.itemRepository.findAll();
  }
  static async getItemById() {}
  static async createItem(itemData: any) {
    return this.itemRepository.create(itemData);
  }
  static async updateItem() {}
  static async deleteItem() {}
}
