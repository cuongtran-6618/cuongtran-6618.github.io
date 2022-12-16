import Head from 'next/head';

// class generate the meta data for the web and also where to include icon etc...
export default function Meta() {
  return (
    <Head>
      <meta name='description' content={`A statically page for Arpeggio Oy.`} />
    </Head>
  );
}
