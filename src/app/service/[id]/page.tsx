import ServiceDetails from "@/components/ServiceDetails/ServiceDetails";
import { SERVICES_DATA } from "@/data/service-data";

export default async function ServiceDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  console.log(params);

  const { id } = await params;

  return <ServiceDetails serviceId={id} />;
}
