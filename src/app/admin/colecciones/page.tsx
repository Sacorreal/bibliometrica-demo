import { CoberturaTematica } from "@/components/admin/CoberturaTematica";
import { ROI } from "@/components/admin/Roi";
import SelectFacultad from "@/components/admin/SelectFacultad";

export default function page() {
  return (
    <div>
      <SelectFacultad />
      <CoberturaTematica />
      <ROI />
    </div>
  );
}
