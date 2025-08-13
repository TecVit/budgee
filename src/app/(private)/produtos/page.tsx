'use client';

import Link from 'next/link';
import '@/app/(private)/dashboard.css';
import { EllipsisVertical } from 'lucide-react';
import { useEffect, useState } from 'react';

const Produtos = () => {

  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<ProductDB[]>([]);

  const [showMenu, setShowMenu] = useState<number>(-1); // ID product

  useEffect(() => {
    const fetching = async () => {
      try {
        const res = await fetch('/api/products');
        if (res.status !== 200) {
          return;
        }
        const data = await res.json();
        const products = data.products as ProductDB[];
        
        setProducts(products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetching();
  }, [])

  return (
    <main className='container-dashboard'>
      <section className='content-dashboard'>

        <div className="header-dashboard">
          <div className="text">
            <h1>Olá, Desenvolvedor</h1>
            <p>Gerencie os produtos da sua empresa aqui!</p>
          </div>
          <div className="btns">
            <Link href="/produtos/adicionar">Adicionar Produto</Link>
          </div>
        </div>

        <div className="table-dashboard">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Quantidade</th>
                <th>Categoria</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 ? (
                products.map((product, i) => (
                  <tr key={i}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.quantity}</td>
                    <td>{product.category}</td>
                    <td className='relative'> 
                      <button onClick={() => setShowMenu(product.id === showMenu ? -1 : product.id)} className='btn-icon'>
                        <EllipsisVertical className='icon' />
                      </button>

                      {showMenu == product.id && (
                        <div className="absolute">
                          <Link href={`/produtos/${product.id}/editar`}>Editar</Link>
                          <Link href={`/produtos/${product.id}/deletar`}>Deletar</Link>
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              ) : loading ? (
                <tr>
                  <td colSpan={5}> 
                  <div style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}>
                    <div className="loader"></div>
                    <p style={{ fontSize: '18px', margin: '0px 0px 0px 14px' }}>Carregando produtos...</p>
                  </div> </td>
                </tr>
              ) : (
                <tr>
                  <td style={{ textAlign: 'center' }} colSpan={5}>Nenhum produto encontrado</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </section>
    </main>
  )
};

export default Produtos;