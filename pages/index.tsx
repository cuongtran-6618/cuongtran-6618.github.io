import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';
import LogoSrc from '../public/images/Logo.png';
import Slider from '../components/slider';

export default function Home() {
  return (
    <Layout>
      <Slider />
      <div className=''></div>
    </Layout>
  );
}
