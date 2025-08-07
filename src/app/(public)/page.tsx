'use client';

import Link from 'next/link';
import './style.css';
import Image from 'next/image';
import Logo from '@/assets/images/logo-blue.svg';
import { useState } from 'react';
import { CircleAlert } from 'lucide-react';

const Landing = () => {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const signIn = async () => {
    try {
      if (email != "admin" && password != "admin") {
        setError(true);
      } else {
        document.location.href = "/inicio";
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className='container-auth'>
      <section className='content-auth'>
        
        <div className="background-blue">
          <Image src={Logo} alt='Logo' />
        </div>

        <div className="form">
          <div className="center">
            <h1>Entrar na sua conta</h1>

            <div className="input">
              <label htmlFor="email">
                Digite seu email 
                {error && (
                  <span className='error'> 
                    <CircleAlert strokeWidth={2} className='icon' /> 
                    Email Inválido
                  </span>
                )}
              </label>
              <input onChange={(e) => setEmail(e.target.value)} className={`${error ? 'error' : ''}`} type="text" name="email" id="email" />
            </div>

            <div className="input">
              <label htmlFor="password">
                Digite sua senha 
                {error && (
                  <span className='error'> 
                    <CircleAlert strokeWidth={2} className='icon' /> 
                    Senha Inválida
                  </span>
                )}
              </label>
              <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" />
            </div>

            <button onClick={() => signIn()}>Entrar na Conta</button>
          </div>

          <div className="bottom">
            <p>Não possui uma conta? <Link href="/cadastrar">Criar agora</Link></p>
          </div>
        </div>

        <p>&copy; 2025 - Todos direitos reservados</p>

      </section>
    </main>
  )
};

export default Landing;