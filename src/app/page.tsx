import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import SpecSheet from '@/components/SpecSheet';
import ProductLineup from '@/components/ProductLineup';
import Reviews from '@/components/Reviews';
import OrderPanel from '@/components/OrderPanel';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <SpecSheet />
      <ProductLineup />
      <Reviews />
      <OrderPanel />
      <Footer />
    </main>
  );
}
