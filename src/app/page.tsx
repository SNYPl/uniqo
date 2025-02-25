import Services from '@/components/Services/Services';
import About from '@/components/About/About';
import Process from '@/components/Process/Process';
import WhyChoose from '@/components/WhyChoose/WhyChoose';
import Banner from '@/components/Banner/Banner';
import Work from '@/components/Work/Work';
import Team from '@/components/Team/Team';
export default function Home() {
  return (
    <main>
       <Banner />
      <Services />
      <About />
      <Process />
      <WhyChoose />
      <Work />
      <Team />
    </main>
  );
}
