'use client';

import Logo from '@/assets/images/logo-blue.svg';
import Image from 'next/image';
import './style.css';
import Link from 'next/link';
import { ChevronDown, User } from 'lucide-react';

const Navbar = () => {

  const links = [
    {
      url: "/inicio",
      name: "Início",
    },
    {
      url: "/produtos",
      name: "Produtos",
    },
    {
      url: "/clientes",
      name: "Clientes",
    },
    {
      url: "/orcamentos",
      name: "Orçamentos",
    },
  ] as const;

  return (
    <header className='container-navbar'>
      <section className='content-navbar'>

        <Image src={Logo} alt="Logo" />

        <div className="links">
          {links.length > 0 && (
            links.map((link, i) => (
              <Link href={link.url} key={i}>{link.name}</Link>
            ))
          )}
        </div>

        <div className="profile">
          <div className="btn">
            <p>Desenvolvedor</p>
            <ChevronDown className='arrow' />
          </div>
        </div>

      </section>
    </header>
  )
};

export default Navbar;