import FullPageSpinner from "@/components/utils/FullPageSpinner";
import AppLayout from "@/layouts/AppLayout";
import { trpc } from "@/libs/utils/trpc";
import { useRouter } from "next/router";
import ExerciseTableCondensed from "../exercises/ExerciseTableCondensed";
import type { WorkoutWithAuthor } from "./WorkoutList";

export default function WorkoutDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const workoutId = parseInt(id as string);
  const { data, isLoading } = trpc.workout.read.useQuery({
    id: workoutId,
  });
  const workout = data as WorkoutWithAuthor;
  return (
    <AppLayout>
      {workout ? (
        <div className="bg-neutral-50">
          <div className="relative overflow-hidden">
            <div
              className="absolute inset-y-0 h-full w-full"
              aria-hidden="true"
            >
              <div className="relative h-full">
                <svg
                  className="absolute right-full translate-y-1/3 translate-x-1/4 transform sm:translate-x-1/2 md:translate-y-1/2 lg:translate-x-full"
                  width={404}
                  height={784}
                  fill="none"
                  viewBox="0 0 404 784"
                >
                  <defs>
                    <pattern
                      id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-neutral-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={784}
                    fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)"
                  />
                </svg>
                <svg
                  className="absolute left-full -translate-y-3/4 -translate-x-1/4 transform sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
                  width={404}
                  height={784}
                  fill="none"
                  viewBox="0 0 404 784"
                >
                  <defs>
                    <pattern
                      id="d2a68204-c383-44b1-b99f-42ccff4e5365"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-neutral-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={784}
                    fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)"
                  />
                </svg>
              </div>
            </div>

            <div className="relative pt-6 pb-16 sm:pb-24">
              <div className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6">
                <div className="text-center">
                  <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
                    <span className="block">{workout?.name}</span>
                  </h1>
                  <p className="mx-auto mt-3 max-w-md text-base text-neutral-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
                    {workout?.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div
                className="absolute inset-0 z-10 flex flex-col"
                aria-hidden="true"
              >
                <div className="flex-1" />
                <div className="w-full flex-1 bg-neutral-800" />
              </div>
              {workout?.exercises && (
                <>
                  <div className="relative z-30 mx-auto h-full max-w-7xl px-4 sm:px-6">
                    <ExerciseTableCondensed exercises={workout?.exercises} />
                  </div>
                  <div className="bg-neutral-800 py-12" />
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        <FullPageSpinner />
      )}
    </AppLayout>
  );
}
