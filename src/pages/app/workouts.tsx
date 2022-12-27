import AppLayout from "@/layouts/AppLayout";
import { trpc } from "@/libs/utils/trpc";

export default function Workouts() {
  const { data: workouts, isLoading } = trpc.workout.findManyWorkout.useQuery({
    include: {
      exercises: true,
    },
  });
  console.log(workouts);

  return (
    <AppLayout>
      <div className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-zinc-50">
            Workouts
          </h1>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="py-4">
            <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
