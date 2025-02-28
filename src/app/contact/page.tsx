import PageBanner from "@/components/PageBanner/PageBanner";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <main>
      <PageBanner
        title="Contact Us"
        description="Unleash the power of neuroscience in leadership
            to boost effectiveness and drive lasting resilience in your
            organization."
        backgroundImage="/assets/images/contactus.jpg"
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Contact us", link: "/contact" },
        ]}
      />
      <Contact />
    </main>
  );
}
