import ServicesForm from "@/components/user/servicios/service-form";
import ServiceItem from "@/components/user/servicios/service-item";

export default function page() {
  return (
    <div className="flex">
      <ServiceItem />

      <ServicesForm />
    </div>
  );
}
