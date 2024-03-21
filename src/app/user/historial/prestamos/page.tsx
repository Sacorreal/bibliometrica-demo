import TableLend from "@/components/user/historial/table-lend";
import TabsNavigation from "@/components/user/historial/tabs-navigation";

export default function page() {
  return (
    <>
      <div className="flex justify-center mt-4">
        <TabsNavigation />
      </div>
      <TableLend />
    </>
  );
}
