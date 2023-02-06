import FullPageSpinner from "@/components/utils/FullPageSpinner";
import AppLayout from "@/layouts/AppLayout";
import { getBaseUrl } from "@/libs/utils/helpers";
import { trpc } from "@/libs/utils/trpc";
import { LinkIcon, QuestionMarkCircleIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import ExerciseTableCondensed from "../exercises/ExerciseTableCondensed";
import type { WorkoutWithAuthor } from "./WorkoutList";

export default function WorkoutDetailPage() {
  const router = useRouter();
  const { slug } = router.query;
  const workoutIdString = slug as string;
  const workoutId = parseInt(workoutIdString);
  const { data, isLoading } = isNaN(workoutId)
    ? trpc.workout.getBySlug.useQuery({
        slug: workoutIdString,
      })
    : trpc.workout.read.useQuery({
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
                <div className="flex flex-col items-center space-y-4 text-center">
                  <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
                    <span className="block">{workout?.name}</span>
                  </h1>
                  <p className="mx-auto max-w-md text-base text-neutral-500 sm:text-lg md:max-w-3xl md:text-xl">
                    {workout?.description}
                  </p>
                  <button
                    type="button"
                    className="group inline-flex items-center font-medium text-amber-600 hover:text-amber-900"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `${getBaseUrl()}/app/workouts/${slug}`
                      );
                      toast.success("Link copied to clipboard!");
                    }}
                  >
                    <LinkIcon
                      className="h-5 w-5 text-amber-500 group-hover:text-amber-900"
                      aria-hidden="true"
                    />
                    <span className="ml-2">Copy link</span>
                  </button>
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
