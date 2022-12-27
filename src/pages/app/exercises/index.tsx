import ExerciseTable from "./ExerciseTable";
import AppLayout from "@/layouts/AppLayout";

export default function Exercises() {
  return (
    <AppLayout>
      <div className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-zinc-50">
            Exercises
          </h1>
          <ExerciseTable />
        </div>
      </div>
    </AppLayout>
  );
}
