interface ProductDB {
  id: number; // identificador único do produto
  name: string; // nome do produto
  description?: string; // descrição do produto
  price: number; // preço do produto
  quantity: number; // quantidade em estoque
  category?: string; // categoria do produto
  brand?: string; // marca do produto
  sku?: string; // código de estoque (SKU)
  imageUrl?: string; // URL da imagem do produto
  createdAt: Date; // data de criação
  updatedAt?: Date; // data da última atualização
  isActive: boolean; // se o produto está ativo/visível (publico - 1) ou (privado - 0)
  discountPercentage?: number; // percentual de desconto (se houver)
  tags?: string[]; // etiquetas/palavras-chave do produto
  weight?: number; // peso do produto (em kg, g, etc.)
  dimensions?: {
    width: number; // largura
    height: number; // altura
    depth: number; // profundidade
  }; // dimensões do produto
}