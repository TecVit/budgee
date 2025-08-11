'use client';

import Link from 'next/link';
import '@/app/(private)/dashboard.css';
import { EllipsisVertical } from 'lucide-react';
import { useEffect, useState } from 'react';

const Produtos = () => {
  const [showMenu, setShowMenu] = useState<number>(-1); // ID product

  /* Files */
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>("Nenhum arquivo selecionado");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
      setFileName(event.target.files[0].name);
    } else {
      setFileName("Nenhum arquivo selecionado");
    }
  };

  // Inputs
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState('');
  const [keywords, setKeywords] = useState('');
  const [brand, setBrand] = useState('');
  const [sku, setSku] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isActive, setIsActive] = useState<boolean>(false);
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [tags, setTags] = useState('');
  const [weight, setWeight] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [depth, setDepth] = useState('');

  const handleAddProduct = () => {
    try {
      
    } catch (error) {
      console.log(error);
    }
  }

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
            <Link onClick={handleAddProduct} className='btn-green' href="">Adicionar Produto</Link>
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
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="ex: iPhone 15 Pro Max" type="text" />
            </div>
            <div className="input">
              <label>Descrição</label>
              <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="ex: Cor Grafite, 8 GB RAM e 256 GB" type="text" />
            </div>
            <div className="input">
              <label>Preço</label>
              <input value={price} onChange={(e) => setPrice(Number(e.target.value))} placeholder="ex: 8499,00" type="text" />
            </div>
            <div className="input">
              <label>Quantidade</label>
              <input value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} placeholder="ex: 100" type="text" />
            </div>
            <div className="input">
              <label>Código do Estoque</label>
              <input value={sku} onChange={(e) => setSku(e.target.value)} placeholder="ex: IP15PMX256-GRF" type="text" />
            </div>
            <div className="input">
              <label>Categoria</label>
              <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="ex: Eletrônicos" type="text" />
            </div>
            <div className="input">
              <label>Marca do Produto</label>
              <input value={brand} onChange={(e) => setBrand(e.target.value)} placeholder="ex: Apple" type="text" />
            </div>
            <div className="input">
              <label>Visíbilidade</label>
              <select value={String(isActive)} onChange={(e) => setIsActive(e.target.value === 'true')}>
                <option value="true">Público</option>
                <option value="false">Privado</option>
              </select>
            </div>
            <div className="input">
              <label>Percentual de Desconto</label>
              <input value={discountPercentage} onChange={(e) => setDiscountPercentage(e.target.value)} placeholder="ex: 5 %" type="text" />
            </div>
            <div className="input">
              <label>Comprimento</label>
              <input value={width} onChange={(e) => setWidth(e.target.value)} placeholder="ex: 159,9 mm" type="text" />
            </div>
            <div className="input">
              <label>Largura</label>
              <input value={depth} onChange={(e) => setDepth(e.target.value)} placeholder="ex: 76,7 mm" type="text" />
            </div>
            <div className="input">
              <label>Altura</label>
              <input value={height} onChange={(e) => setHeight(e.target.value)} placeholder="ex: 8,25 mm" type="text" />
            </div>
            <div className="input">
              <label>Peso</label>
              <input value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="ex: 221 g" type="text" />
            </div>
            <div className="input">
              <label>Palavras-Chaves (utilize ; para separar)</label>
              <input value={keywords} onChange={(e) => setKeywords(e.target.value)} placeholder="ex: Apple; A17 Pro; Câmera Tripla; USB-C" type="text" />
            </div>

          </div>
        </div>

      </section>
    </main>
  )
};

export default Produtos;