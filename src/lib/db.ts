import { promises as fs } from 'fs';
import path from 'path';

export interface Order {
  id: string;
  email: string;
  model: string;
  createdAt: string;
}

interface DbShape {
  orders: Order[];
}

const DB_PATH = path.join(process.cwd(), 'data', 'db.json');

async function ensureDb(): Promise<void> {
  try {
    await fs.access(DB_PATH);
  } catch {
    await fs.mkdir(path.dirname(DB_PATH), { recursive: true });
    await fs.writeFile(DB_PATH, JSON.stringify({ orders: [] }, null, 2));
  }
}

async function readDb(): Promise<DbShape> {
  await ensureDb();
  const raw = await fs.readFile(DB_PATH, 'utf-8');
  return JSON.parse(raw) as DbShape;
}

async function writeDb(data: DbShape): Promise<void> {
  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2));
}

export async function createOrder(email: string, model: string): Promise<Order> {
  const db = await readDb();
  const order: Order = {
    id: `ord_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    email,
    model,
    createdAt: new Date().toISOString(),
  };
  db.orders.push(order);
  await writeDb(db);
  return order;
}

export async function listOrders(): Promise<Order[]> {
  const db = await readDb();
  return db.orders;
}
