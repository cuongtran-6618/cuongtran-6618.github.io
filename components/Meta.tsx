import Head from "next/head";
import seo from "../data/seo.json";

// class generate the meta data for the web and also where to include icon etc...
export default function Meta() {
  return (
    <Head>
      <title>{seo.meta.title}</title>
      <meta name="keywords" content={seo.meta.keywords} />
      <meta name="description" content={seo.meta.description} />
      <meta name="robots" content="noindex,nofollow" />
      <meta name="googlebot" content="noindex,nofollow" />
    </Head>
  );
}
