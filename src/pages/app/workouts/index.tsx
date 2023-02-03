import FullPageSpinner from "@/components/utils/FullPageSpinner";
import AppLayout from "@/layouts/AppLayout";
import { trpc } from "@/libs/utils/trpc";
import type { WorkoutWithAuthor } from "./WorkoutList";
import WorkoutList from "./WorkoutList";

export default function Workouts() {
  const { data: workouts, isLoading } = trpc.workout.list.useQuery();

  return (
    <AppLayout>
      {workouts ? (
        <div className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-neutral-900 dark:text-zinc-50">
              Workouts
            </h1>
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <div className="py-4">
              <WorkoutList workouts={workouts as WorkoutWithAuthor[]} />
            </div>
          </div>
        </div>
      ) : (
        <FullPageSpinner />
      )}
    </AppLayout>
  );
}
