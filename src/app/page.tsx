import Services from '@/components/Services/Services';
import About from '@/components/About/About';
import Process from '@/components/Process/Process';
import Banner from '@/components/Banner/Banner';
import Team from '@/components/Team/Team';
import Contact from '@/components/Contact/Contact';

export default function Home() {
  return (
    <main>
       <Banner />
      <Services />
      <About />
      <Process />
      <Team />
      <Contact />
    </main>
  );
}
