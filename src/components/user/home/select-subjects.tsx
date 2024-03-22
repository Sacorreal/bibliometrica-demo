import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectSubjects() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Asignaturas" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Asignaturas</SelectLabel>
          <SelectItem value="Anatomía Humana">Anatomía Humana</SelectItem>
          <SelectItem value="Embriología Humana">Embriología Humana</SelectItem>
          <SelectItem value="Química">Química</SelectItem>
          <SelectItem value="Salud Pública">Salud Pública</SelectItem>
          <SelectItem value="Biología Celular">Biología Celular</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
