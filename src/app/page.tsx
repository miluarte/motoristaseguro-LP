import Header from '@/components/layout/Header/Header';
import Hero from '@/components/sections/Hero/Hero';
import About from '@/components/sections/About/About';
import ComoFunciona from '@/components/sections/ComoFunciona/ComoFunciona';
import Faq from '@/components/sections/Faq/Faq';
import Cta from '@/components/sections/Cta/Cta';
import Footer from '@/components/layout/Footer/Footer';
import Tracks from "@/components/ui/Tracks/Tracks";

export default function Home() {
  return (
    <>
      <Tracks fixed />
      <Header />
      <main style={{ paddingTop: '74px' }}>
        <Hero />
        <About />
        <ComoFunciona />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <Tracks />
    </>
  );
}
