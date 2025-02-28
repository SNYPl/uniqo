import PageBanner from "@/components/PageBanner/PageBanner";
import Courses from "@/components/Courses/Courses";
export default function Home() {
  return (
    <main>
      <PageBanner
        title="Courses"
        description="Unleash the power of neuroscience in leadership
            to boost effectiveness and drive lasting resilience in your
            organization."
        backgroundImage="/assets/images/courses.jpg"
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Courses", link: "/courses" },
        ]}
      />
      <Courses />
    </main>
  );
}
