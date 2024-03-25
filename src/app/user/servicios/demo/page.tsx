import ServicesForm from "@/components/user/servicios/service-form";
import ServiceItem from "@/components/user/servicios/service-item";

export default function page() {
  return (
    <div className="flex">
      <ServiceItem />
      <div className="my-6 p-4 justify-start">
        <ServicesForm />
      </div>
    </div>
  );
}
