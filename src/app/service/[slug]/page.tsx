import ServiceDetails from "@/components/ServiceDetails/ServiceDetails";
import { SlugParams } from "@/types/params.types";

export default async function Page({ params }: SlugParams) {
  console.log(params);

  const { slug } = await params;

  return <ServiceDetails serviceId={slug} />;
}
