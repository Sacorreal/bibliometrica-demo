import TablePenalty from "@/components/user/historial/table-penalty";
import TabsNavigation from "@/components/user/historial/tabs-navigation";
import { Button } from "@mui/material";

export default function page() {
  return (
    <div>
      <div className="flex justify-center">
        <TabsNavigation />
      </div>
      <TablePenalty />
      <Button>Solicitar Paz y salvo</Button>
    </div>
  );
}
