import PageBanner from '@/components/PageBanner/PageBanner';
import Courses from '@/components/Courses/Courses';
export default function Home() {
  return (
    <main>
      <PageBanner
        title="Courses"
        description="Leverage agile frameworks to provide a robust synopsis for high level overviews."
        backgroundImage="/assets/images/courses.jpg"
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Courses", link: "/courses" }
        ]}
      />
      <Courses />
    </main>
  );
}
