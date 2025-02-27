import PageBanner from '@/components/PageBanner/PageBanner';
import Process from '@/components/Process/Process';
export default function Home() {
  return (
    <main>
      <PageBanner
        title="Process"
        description="Leverage agile frameworks to provide a robust synopsis for high level overviews."
        backgroundImage="/assets/images/process/process-background.png"
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Process", link: "/process" }
        ]}
      />
      <Process />
    </main>
  );
}
