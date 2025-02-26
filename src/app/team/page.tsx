import PageBanner from '@/components/PageBanner/PageBanner';
import Team from '@/components/Team/Team';
export default function Home() {
  return (
    <main>
      <PageBanner
        title="Team"
        description="Leverage agile frameworks to provide a robust synopsis for high level overviews."
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Team", link: "/team" }
        ]}
      />
      <Team />
    </main>
  );
}
