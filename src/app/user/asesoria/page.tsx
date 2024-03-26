import Librarian from "@/components/librarian-personal";
import AdvisoryForm from "@/components/user/asesoria/form";

export default function page() {
  return (
    <div className="flex">
      <Librarian />
      <div className="ml-6">
        <AdvisoryForm />
      </div>
    </div>
  );
}
