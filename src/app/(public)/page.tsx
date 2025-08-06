import Link from 'next/link';
import './style.css';
import Image from 'next/image';
import Logo from '@/assets/images/logo-white.svg';

const Landing = () => {
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
              <label htmlFor="email">Digite seu email</label>
              <input type="text" name="email" id="email" />
            </div>

            <div className="input">
              <label htmlFor="email">Digite sua senha</label>
              <input type="text" name="email" id="email" />
            </div>

            <button>Entrar na Conta</button>
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