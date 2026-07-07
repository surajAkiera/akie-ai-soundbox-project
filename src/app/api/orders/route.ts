import { NextRequest, NextResponse } from 'next/server';
import { createOrder, listOrders } from '@/lib/db';

export async function POST(req: NextRequest): Promise<NextResponse> {
  const body = await req.json();
  const { email, model } = body as { email?: string; model?: string };

  if (!email || typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json(
      { error: 'a valid email is required' },
      { status: 400 }
    );
  }

  const order = await createOrder(email, model ?? 'Aura X1');
  return NextResponse.json({ order }, { status: 201 });
}

export async function GET(): Promise<NextResponse> {
  const orders = await listOrders();
  return NextResponse.json({ orders });
}
