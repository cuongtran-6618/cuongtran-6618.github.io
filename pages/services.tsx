import BackHome from "../components/back-home";
import Layout from "../components/layout";
import data from '../data/services.json';
import Service from '../components/service';

export default function Services() {
  return (
    <Layout>
      <h1>Service</h1>
      <div>Service packages</div>

      <BackHome />
    </Layout>
  );
}
