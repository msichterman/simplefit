import {
  CalendarIcon,
  InformationCircleIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";
import type { Exercise, Tag, User, Workout } from "@prisma/client";
import Link from "next/link";
import ExerciseTableCondensed from "../exercises/ExerciseTableCondensed";

const positions = [
  {
    id: 1,
    title: "Back End Developer",
    type: "Full-time",
    location: "Remote",
    department: "Engineering",
    closeDate: "2020-01-07",
    closeDateFull: "January 7, 2020",
  },
  {
    id: 2,
    title: "Front End Developer",
    type: "Full-time",
    location: "Remote",
    department: "Engineering",
    closeDate: "2020-01-07",
    closeDateFull: "January 7, 2020",
  },
  {
    id: 3,
    title: "User Interface Designer",
    type: "Full-time",
    location: "Remote",
    department: "Design",
    closeDate: "2020-01-14",
    closeDateFull: "January 14, 2020",
  },
];
export type WorkoutWithAuthor = Workout & {
  author: Pick<User, "id" | "name">;
  tags: Tag[];
  exercises: Exercise[];
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
              href={`/app/workouts/${workout.id}`}
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
