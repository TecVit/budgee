// app/api/products/route.ts
import { NextResponse, NextRequest } from 'next/server';
import { getPgClient } from '@/lib/postgres/db';

export async function GET(req: NextRequest) {
  const client = getPgClient();

  const { searchParams } = new URL(req.url);
  const search = searchParams.get('search') || "";

  try {
    await client.connect();
    
    let query = `SELECT * FROM products`;
    const params: any[] = [];

    const result = await client.query<ProductDB>(query, params);
    const { rows } = result;

    if (rows.length === 0) {
      await client.end();
      return NextResponse.json({ 
        status: 400, 
        message: 'Nenhum produto foi encontrado' 
      }, { status: 404 });
    }

    const productMapped = rows.map((row) => ({
      id: row.id,
      name: row.name,
      description: row.description,
    })) as ProductDB[];

    if (productMapped.length === 0) {
      return NextResponse.json({ 
        status: 400, 
        message: 'Nenhum produto foi encontrado' 
      }, { status: 404 });
    }
    
    await client.end();

    return NextResponse.json({
      status: 200,
      message: "Produtos coletados com sucesso!",
      products: productMapped,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    console.error('Erro ao buscar artigos:', error);
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
  } finally {
    await client.end();
  }
}