import PageBanner from '@/components/PageBanner/PageBanner';
export default function Home() {
  return (
    <main>
      <PageBanner
        title="Contact Us"
        description="Leverage agile frameworks to provide a robust synopsis for high level overviews."
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Contact us", link: "/contact" }
        ]}
      />
    </main>
  );
}
