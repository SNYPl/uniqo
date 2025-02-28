import PageBanner from "@/components/PageBanner/PageBanner";
import Process from "@/components/Process/Process";
export default function Home() {
  return (
    <main>
      <PageBanner
        title="Process"
        description="Unleash the power of neuroscience in leadership
            to boost effectiveness and drive lasting resilience in your
            organization."
        backgroundImage="/assets/images/process/process-background.png"
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Process", link: "/process" },
        ]}
      />
      <Process />
    </main>
  );
}
