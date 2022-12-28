import type { Exercise } from "@prisma/client";
import { XCircleIcon } from "@heroicons/react/20/solid";
import type { Dispatch, SetStateAction } from "react";

type ExerciseTableCondensedProps = {
  exercises: Exercise[];
  setExercises?: Dispatch<SetStateAction<Exercise[]>>;
};

export default function ExerciseTableCondensed({
  exercises,
  setExercises,
}: ExerciseTableCondensedProps) {
  return (
    <div className="flex w-full flex-col">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full border-neutral-700 p-1 align-middle">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-neutral-300">
              <thead className="bg-neutral-50">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-neutral-900 sm:pl-6"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-neutral-900"
                  >
                    Sets
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-neutral-900"
                  >
                    Reps
                  </th>
                  {setExercises !== undefined && (
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Remove</span>
                    </th>
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 bg-white">
                {exercises?.map((exercise) => (
                  <tr key={exercise.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-neutral-900 sm:pl-6">
                      {exercise.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-neutral-500">
                      {exercise.sets}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-neutral-500">
                      {exercise.reps}
                    </td>
                    {setExercises !== undefined && (
                      <td className="relative mt-0.5 flex h-full items-center whitespace-nowrap py-4 px-3 text-right text-sm font-medium">
                        <button
                          onClick={() =>
                            setExercises(
                              exercises.filter((e) => e.id !== exercise.id)
                            )
                          }
                          type="button"
                          className="text-amber-600 hover:text-amber-900"
                        >
                          <XCircleIcon className="h-5 w-5" />
                          <span className="sr-only">
                            Remove - {exercise.name}
                          </span>
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
