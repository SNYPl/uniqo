import ServiceDetails from "@/components/ServiceDetails/ServiceDetails";
import { SlugParams } from "@/types/params.types";

export default async function Page({ params }: SlugParams) {
  const { slug } = await params;

  return <ServiceDetails serviceId={slug} />;
}
