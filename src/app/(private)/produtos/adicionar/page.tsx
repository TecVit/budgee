'use client';

import Link from 'next/link';
import '@/app/(private)/dashboard.css';
import { EllipsisVertical } from 'lucide-react';
import { useEffect, useState } from 'react';

const Produtos = () => {

  const [products, setProducts] = useState<ProductDB[]>([]);

  const [showMenu, setShowMenu] = useState<number>(-1); // ID product

  useEffect(() => {
    const fetching = async () => {
      const res = await fetch('/products(1).json');
      setProducts(await res.json());
    }

    fetching();
  }, [])

  return (
    <main className='container-dashboard'>
      <section className='content-dashboard'>

        <div className="header-dashboard">
          <div className="text">
            <h1>Olá, Desenvolvedor</h1>
            <p>Adicione seus produtos nessa página!</p>
          </div>
          <div className="btns">
            <Link className='btn-red' href="/produtos">Cancelar</Link>
            <Link className='btn-green' href="">Salvar Produto</Link>
          </div>
        </div>

        <div className="form-dashboard">
          <div className="row">
            <div className="input">
              <label>Nome</label>
              <input placeholder='ex: Iphone 16 Pro Max' type="text" />
            </div>
            <div className="input">
              <label>Descrição</label>
              <input placeholder='ex: Cor Branca, 16 GB RAM e 256 GB' type="text" />
            </div>
            <div className="input">
              <label>Preço</label>
              <input placeholder='ex: 4999,99' type="text" />
            </div>
            <div className="input">
              <label>Quantidade</label>
              <input placeholder='ex: 100' type="text" />
            </div>
            <div className="input">
              <label>Código do Estoque</label>
              <input placeholder='ex: A1B2C3D4' type="text" />
            </div>
            <div className="input">
              <label>Categoria</label>
              <input placeholder='ex: Eletrônico' type="text" />
            </div>
            <div className="input">
              <label>Marca do Produto</label>
              <input placeholder='ex: Apple' type="text" />
            </div>
            <div className="input">
              <label>Visíbilidade</label>
              <select>
                <option value="">Selecione uma opção</option>
                <option value={1}>Público</option>
                <option value={0}>Privado</option>
              </select>
            </div>
            <div className="input">
              <label>Percentual de Desconto</label>
              <input placeholder='ex: 10%' type="text" />
            </div>
            <div className="input">
              <label>Comprimento</label>
              <input placeholder='ex: 100 milímetros' type="text" />
            </div>
            <div className="input">
              <label>Largura</label>
              <input placeholder='ex: 200 milímetros' type="text" />
            </div>
            <div className="input">
              <label>Altura</label>
              <input placeholder='ex: 10 milímetros' type="text" />
            </div>
            <div className="input">
              <label>Peso</label>
              <input placeholder='ex: 600 gramas' type="text" />
            </div>
            <div className="input">
              <label>Palavras Chaves (utilize ; para separar)</label>
              <input placeholder='ex: Apple Intelligence; 48 MP; Ultra Wide' maxLength={3} min={1} type="text" />
            </div>
          </div>
        </div>

      </section>
    </main>
  )
};

export default Produtos;