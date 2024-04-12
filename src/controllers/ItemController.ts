import { Request, Response } from "express";
import ItemService from "../services/ItemServices";

export default class ItemController {
  static async getAllItems(req: Request, res: Response) {
    try {
      const items = await ItemService.getAllItems();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  static async getItemById(req: Request, res: Response) {}
  static async createItem(req: Request, res: Response) {
    try {
      const newItem = await ItemService.createItem(req.body);
      res.status(201).json(newItem);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  static async updateItem(req: Request, res: Response) {}
  static async deleteItem(req: Request, res: Response) {}
}
