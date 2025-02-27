import PageBanner from '@/components/PageBanner/PageBanner';
import Contact from '@/components/Contact/Contact';

export default function Home() {
  return (
    <main>
      <PageBanner
        title="Contact Us"
        description="Leverage agile frameworks to provide a robust synopsis for high level overviews."
        backgroundImage="/assets/images/contactus.jpg"
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Contact us", link: "/contact" }
        ]}
      />
      <Contact />
    </main>
  );
}
