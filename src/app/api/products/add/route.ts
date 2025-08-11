// app/api/(engenharia)/products/add/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getPgClient } from '@/lib/postgres/db';

interface ProductInput {
  name: string;
  description?: string;
  price: number;
  quantity: number;
  category?: string;
  brand?: string;
  sku?: string;
  imageUrl?: string;
  isActive?: boolean;
  discountPercentage?: number;
  tags?: any;
  weight?: number;
  width?: number;
  height?: number;
  depth?: number;
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const {
    name,
    description,
    price,
    quantity,
    category,
    brand,
    sku,
    imageUrl,
    isActive,
    discountPercentage,
    tags,
    weight,
    width,
    height,
    depth
  } = body as ProductInput;

  if (!name || price === undefined || quantity === undefined) {
    return NextResponse.json({
      status: 400,
      message: 'Preencha os campos obrigatórios: name, price, quantity',
    }, { status: 400 });
  }

  const client = getPgClient();

  try {
    await client.connect();

    const query = `
      INSERT INTO produtos (
        name, description, price, quantity, category, brand, sku, imageUrl,
        isActive, discountPercentage, tags, weight, width, height, depth
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8,
        COALESCE($9, TRUE), $10, $11, $12, $13, $14, $15
      ) RETURNING *;
    `;

    const values = [
      name,
      description || null,
      price,
      quantity,
      category || null,
      brand || null,
      sku || null,
      imageUrl || null,
      isActive,
      discountPercentage || null,
      tags || null,
      weight || null,
      width || null,
      height || null,
      depth || null
    ];

    const { rows } = await client.query(query, values);

    await client.end();

    return NextResponse.json({
      status: 200,
      message: 'Produto adicionado com sucesso!',
      product: rows[0],
    }, { status: 200 });

  } catch (error: any) {
    console.error('Erro ao adicionar produto:', error);
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
  } finally {
    await client.end();
  }
}