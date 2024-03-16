import DocumentRequest from "@/components/user/servicios/document-request";
import TrainingServices from "@/components/user/servicios/training-services";

export default function page() {
  return (
    <div className="overflow-x-visible overflow-y-clip">
      <TrainingServices />
      <DocumentRequest />
    </div>
  );
}
