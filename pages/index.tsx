import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';
import LogoSrc from '../public/images/Logo.png'

export default function Home() {
  return (
    <Layout>
      <main className='container mx-auto'>
        <div className='flex flex-row justify-center'>
          <Image src={LogoSrc} alt='logo' height={200} width={200} className="items-center"></Image>
        </div>
        <h1 className='text-3xl font-bold text-center'>Welcome to Arpeggio</h1>
        
        <div className='flex flex-row justify-between items-baseline flex-wrap m-3'>          
          <div className='hover:underline'><Link href='/services'>Services</Link></div>
          <div className='hover:underline'><Link href='/our-work'>Our work</Link></div>
          <div className='hover:underline'><Link href='/about-us'>About us</Link></div>
          <div className='hover:underline'><Link href='/contact-us'>Contact us</Link></div>                 
        </div>
               
      </main>
    </Layout>
  );
}
