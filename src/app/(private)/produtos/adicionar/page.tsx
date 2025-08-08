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
  }, []);

  /* Files */
  const [fileName, setFileName] = useState<string>("Nenhum arquivo selecionado");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    } else {
      setFileName("Nenhum arquivo selecionado");
    }
  };

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
            <Link className='btn-green' href="">Adicionar Produto</Link>
          </div>
        </div>

        <div className="form-dashboard">
          <div className="row">
            <div className="file-upload"> 
              <label htmlFor="fileInput" className="file-label">
                <span className="file-text">Escolher arquivo</span>
              </label>
              <input onChange={handleFileChange} type="file" id="fileInput" className="file-input" />
              <span id="fileName" className="file-name">{fileName}</span>
            </div>
            <div className="input">
              <label>Nome</label>
              <input placeholder="ex: iPhone 15 Pro Max" type="text" />
            </div>
            <div className="input">
              <label>Descrição</label>
              <input placeholder="ex: Cor Grafite, 8 GB RAM e 256 GB" type="text" />
            </div>
            <div className="input">
              <label>Preço</label>
              <input placeholder="ex: 8499,00" type="text" />
            </div>
            <div className="input">
              <label>Quantidade</label>
              <input placeholder="ex: 100" type="text" />
            </div>
            <div className="input">
              <label>Código do Estoque</label>
              <input placeholder="ex: IP15PMX256-GRF" type="text" />
            </div>
            <div className="input">
              <label>Categoria</label>
              <input placeholder="ex: Eletrônicos" type="text" />
            </div>
            <div className="input">
              <label>Marca do Produto</label>
              <input placeholder="ex: Apple" type="text" />
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
              <input placeholder="ex: 5 %" type="text" />
            </div>
            <div className="input">
              <label>Comprimento</label>
              <input placeholder="ex: 159,9 mm" type="text" />
            </div>
            <div className="input">
              <label>Largura</label>
              <input placeholder="ex: 76,7 mm" type="text" />
            </div>
            <div className="input">
              <label>Altura</label>
              <input placeholder="ex: 8,25 mm" type="text" />
            </div>
            <div className="input">
              <label>Peso</label>
              <input placeholder="ex: 221 g" type="text" />
            </div>
            <div className="input">
              <label>Palavras-Chaves (utilize ; para separar)</label>
              <input placeholder="ex: Apple; A17 Pro; Câmera Tripla; USB-C" type="text" />
            </div>

          </div>
        </div>

      </section>
    </main>
  )
};

export default Produtos;