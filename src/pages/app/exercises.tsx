import PaginatedTableWithCheckboxes from "@/components/PaginatedTableWithCheckboxes";
import AppLayout from "@/layouts/AppLayout";

export default function Exercises() {
  return (
    <AppLayout>
      <div className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Exercises</h1>
          <PaginatedTableWithCheckboxes />
        </div>
      </div>
    </AppLayout>
  );
}
