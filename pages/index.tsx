import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";
import LogoSrc from "../public/images/Logo.png";
import Slider from "../components/slider";
import data from '../data/services.json';
import Service from '../components/service';

export default function Home() {
  return (
    <Layout>
      <Slider />
      <section className='lg:container lg:mx-auto mt-4 mb-4'>
        <div className='grid grid-cols-2'>
          {data.services.map((service) => (
            <Service key={service.uid} props={service} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
