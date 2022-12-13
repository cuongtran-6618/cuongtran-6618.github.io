import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <div className='flex flex-row justify-center'><Image src='/images/logo.png' alt='logo' height={200} width={200} className="items-center"></Image></div>
        <h1 className='text-3xl font-bold text-center'>Welcome to Arpeggio</h1>
        <div className='flex flex-row justify-between items-baseline flex-wrap m-3'>          
          <div><Link href='/services'>Services</Link></div>
          <div><Link href='/our-work'>Our work</Link></div>
          <div><Link href='/about-us'>About us</Link></div>
          <div><Link href='/contact-us'>Contact us</Link></div>                 
        </div>
               
      </main>
    </Layout>
  );
}
