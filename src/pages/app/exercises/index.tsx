import ExerciseTable from "./ExerciseTable";
import AppLayout from "@/layouts/AppLayout";
import WorkoutSidebar from "./WorkoutSidebar";
import { useState } from "react";
import type { Prisma } from "@prisma/client";

export default function Exercises() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedExercises, setSelectedExercises] = useState<
    Prisma.ExerciseGetPayload<{
      include: { tags: true };
    }>[]
  >([]);

  return (
    <AppLayout>
      <WorkoutSidebar
        selectedExercises={selectedExercises}
        setSelectedExercises={setSelectedExercises}
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      />
      <div className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50">
            Exercises
          </h1>
          <ExerciseTable
            selectedExercises={selectedExercises}
            setSelectedExercises={setSelectedExercises}
            setSidebarOpen={setSidebarOpen}
          />
        </div>
      </div>
    </AppLayout>
  );
}
