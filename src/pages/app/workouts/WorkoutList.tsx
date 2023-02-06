import {
  CalendarIcon,
  InformationCircleIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";
import type { Prisma, Tag, User, Workout } from "@prisma/client";
import Link from "next/link";
import ExerciseTableCondensed from "../exercises/ExerciseTableCondensed";

export type WorkoutWithAuthor = Workout & {
  author: Pick<User, "id" | "name">;
  tags: Tag[];
  exercises: Prisma.ExerciseGetPayload<{
    include: { tags: true };
  }>[];
};
type WorkoutListProps = {
  workouts: WorkoutWithAuthor[];
};

export default function WorkoutList({ workouts }: WorkoutListProps) {
  return (
    <div className="overflow-hidden shadow">
      <ul role="list" className="space-y-8">
        {workouts?.map((workout) => (
          <li
            key={workout.id}
            className="m-1 rounded-lg bg-neutral-50 shadow-md dark:bg-neutral-900"
          >
            <Link
              href={`/app/workouts/${workout.slug}`}
              className="block rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="truncate text-sm font-medium text-amber-600">
                    {workout.name}
                  </p>
                  <div className="flex">
                    {workout.tags?.map((tag) => (
                      <div className="ml-2 flex flex-shrink-0" key={tag.id}>
                        <p className="inline-flex rounded-full bg-amber-100 px-2 text-xs font-semibold leading-5 text-amber-800">
                          {tag.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="my-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-neutral-500">
                      <UsersIcon
                        className="mr-1.5 h-5 w-5 flex-shrink-0 text-neutral-400"
                        aria-hidden="true"
                      />
                      {workout.author.name}
                    </p>
                    <p className="mt-2 flex items-center text-xxs text-neutral-400 sm:mt-0 sm:ml-6">
                      <InformationCircleIcon
                        className="mr-1.5 h-4 w-4 flex-shrink-0 text-neutral-300"
                        aria-hidden="true"
                      />
                      {workout.description}
                    </p>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-neutral-500 sm:mt-0">
                    <CalendarIcon
                      className="mr-1.5 h-5 w-5 flex-shrink-0 text-neutral-400"
                      aria-hidden="true"
                    />
                    <p>
                      Created:{" "}
                      <time dateTime={workout.createdAt?.toISOString()}>
                        {workout.createdAt?.toLocaleDateString(undefined, {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </p>
                  </div>
                </div>
                <ExerciseTableCondensed exercises={workout.exercises} />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
