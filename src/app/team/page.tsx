import PageBanner from "@/components/PageBanner/PageBanner";
import Team from "@/components/Team/Team";
export default function Home() {
  return (
    <main>
      <PageBanner
        title="Team"
        description="Unleash the power of neuroscience in leadership
            to boost effectiveness and drive lasting resilience in your
            organization."
        backgroundImage="/assets/images/team/team-bg.jpg"
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Team", link: "/team" },
        ]}
      />
      <Team />
    </main>
  );
}
