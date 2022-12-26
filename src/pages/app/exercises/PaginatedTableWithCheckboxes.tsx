import clsx from "clsx";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/20/solid";
import { type Exercise } from "@prisma/client";
import ExternalLink from "../../../components/ExternalLink";
import { trpc } from "@/libs/utils/trpc";

export default function PaginatedTableWithCheckboxes() {
  const checkbox = useRef<HTMLInputElement | null>(null);
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedExercises, setSelectedExercises] = useState<Exercise[]>([]);
  const [take, setTake] = useState(20);
  const [skip, setSkip] = useState(0);
  const [pageCount, setPageCount] = useState<number | null>(null);
  const [searchInput, setSearchInput] = useState("");
  const [searchString, setSearchString] = useState("");

  const exerciseWhereQuery = {
    where: {
      name: {
        search: searchString,
      },
    },
  };

  const { data: count } = trpc.exercise.countExercise.useQuery({
    ...(Boolean(searchString) ? exerciseWhereQuery : {}),
  });
  const { data: exercises, isLoading } =
    trpc.exercise.findManyExercise.useQuery({
      take,
      skip,
      ...(Boolean(searchString) ? exerciseWhereQuery : {}),
    });

  useEffect(() => {
    if (count) {
      const pages = Math.ceil(count / take);
      setPageCount(pages);
    }
  }, [count, take]);

  useLayoutEffect(() => {
    if (checkbox?.current) {
      const isIndeterminate =
        selectedExercises.length > 0 &&
        selectedExercises.length < (exercises?.length ?? 0);
      setChecked(selectedExercises.length === (exercises?.length ?? 0));
      setIndeterminate(isIndeterminate);
      checkbox.current.indeterminate = isIndeterminate;
    }
  }, [exercises?.length, selectedExercises]);

  function toggleAll() {
    setSelectedExercises(
      checked || indeterminate || !exercises ? [] : exercises
    );
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  return (
    <div>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <p className="mt-2 text-sm text-gray-700 dark:text-zinc-200">
            Browse our library of exercises, complete with set, rep, and rest
            suggestions as well as a links to see examples.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-amber-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 sm:w-auto"
          >
            Add exercise
          </button>
        </div>
      </div>
      <form
        className="mt-8 mb-4"
        onSubmit={(e) => {
          e.preventDefault();
          setSearchString(searchInput);
        }}
      >
        <label
          htmlFor="default-search"
          className="dark:text-zinc-50dark:text-zinc-50 sr-only mb-2 text-sm font-medium text-gray-900 dark:text-zinc-100 dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              aria-hidden="true"
              className="h-5 w-5 text-gray-500 dark:text-gray-300 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="dark:text-zinc-50focus:border-amber-500 block w-full rounded-lg border border-gray-300 bg-zinc-50 p-4 pl-10 text-sm text-gray-900 focus:ring-amber-500 dark:border-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:bg-gray-700 dark:text-zinc-50 dark:text-zinc-50 dark:text-white dark:placeholder-gray-400 dark:focus:border-amber-500 dark:focus:ring-amber-500"
            placeholder="Search exercises..."
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <button
            type="submit"
            className="absolute right-2.5 bottom-2.5 rounded-lg bg-amber-700 px-4 py-2 text-sm font-medium text-white hover:bg-amber-800 focus:outline-none focus:ring-4 focus:ring-amber-300 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
          >
            Search
          </button>
        </div>
      </form>
      <div className="flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              {selectedExercises.length > 0 && (
                <div className="absolute top-0 left-12 flex h-12 items-center space-x-3 bg-zinc-50 dark:bg-gray-800 sm:left-16">
                  <button
                    type="button"
                    className="inline-flex items-center rounded border border-gray-300 bg-zinc-50 px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30 dark:border-gray-900 dark:bg-gray-700 dark:text-zinc-100"
                  >
                    Add to workout...
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center rounded border border-gray-300 bg-zinc-50 px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30 dark:border-gray-900 dark:bg-gray-700 dark:text-zinc-100"
                  >
                    Bulk edit
                  </button>
                </div>
              )}
              <table className="min-w-full table-fixed divide-y divide-gray-300 dark:divide-gray-900">
                <thead className="bg-zinc-50 dark:bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="relative w-12 px-6 sm:w-16 sm:px-8"
                    >
                      <input
                        type="checkbox"
                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500 dark:border-gray-900 sm:left-6"
                        ref={checkbox}
                        checked={checked}
                        onChange={toggleAll}
                      />
                    </th>
                    <th
                      scope="col"
                      className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-zinc-100"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-zinc-100"
                    >
                      Difficulty
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-zinc-100"
                    >
                      Sets
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-zinc-100"
                    >
                      Reps
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-zinc-100"
                    >
                      Rest
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-zinc-100"
                    >
                      Example
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="w-full divide-y divide-gray-200 dark:divide-gray-800">
                  {exercises?.map((exercise: Exercise) => (
                    <tr
                      key={exercise.id}
                      className={
                        selectedExercises.includes(exercise)
                          ? "bg-zinc-100 dark:bg-gray-900"
                          : "bg-zinc-50 dark:bg-gray-700"
                      }
                    >
                      <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                        {selectedExercises.includes(exercise) && (
                          <div className="absolute inset-y-0 left-0 w-0.5 bg-amber-600" />
                        )}
                        <input
                          type="checkbox"
                          className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500 dark:border-gray-900 sm:left-6"
                          value={exercise.id}
                          checked={selectedExercises.includes(exercise)}
                          onChange={(e) =>
                            setSelectedExercises(
                              e.target.checked
                                ? [...selectedExercises, exercise]
                                : selectedExercises.filter(
                                    (e) => e.id !== exercise.id
                                  )
                            )
                          }
                        />
                      </td>
                      <td
                        className={clsx(
                          "whitespace-nowrap py-4 pr-3 text-sm font-medium capitalize",
                          selectedExercises.includes(exercise)
                            ? "text-amber-600"
                            : "text-gray-900 dark:text-zinc-100"
                        )}
                      >
                        {exercise.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm capitalize text-gray-500 dark:text-gray-300">
                        {exercise.difficulty}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-300">
                        {exercise.sets}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-300">
                        {exercise.reps}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-300">
                        {`${exercise.rest} sec`}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-300">
                        <ExternalLink href={exercise.exampleLink}>
                          <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                        </ExternalLink>
                      </td>
                      <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a
                          href="#"
                          className="text-amber-600 hover:text-amber-900"
                        >
                          Edit<span className="sr-only">, {exercise.name}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {count && pageCount && (
        <div className="flex items-center justify-between border-t border-gray-200 bg-zinc-50 px-4 py-3 dark:border-gray-900 dark:bg-gray-800 sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden">
            <button
              onClick={() => setSkip((s) => (s >= take ? s - take : s))}
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-zinc-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-zinc-50 dark:border-gray-900 dark:bg-gray-700"
            >
              Previous
            </button>
            <button
              onClick={() => setSkip((s) => (s + take <= count ? s + take : s))}
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-zinc-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-zinc-50 dark:border-gray-900 dark:bg-gray-700"
            >
              Next
            </button>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700 dark:text-zinc-50">
                Showing <span className="font-medium">{skip + 1}</span> to{" "}
                <span className="font-medium">
                  {Math.min(skip + take, count)}
                </span>{" "}
                of <span className="font-medium">{count}</span> results
              </p>
            </div>
            <div>
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <button
                  onClick={() => setSkip((s) => (s >= take ? s - take : s))}
                  className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-zinc-50 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-zinc-50 focus:z-20 dark:border-gray-900 dark:bg-gray-700 dark:text-gray-200"
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </button>
                {/* Current: "z-10 bg-amber-50 border-amber-500 text-amber-600", Default: "bg-zinc-50 border-gray-300 dark:border-gray-900 text-gray-500 dark:text-gray-300 hover:bg-zinc-50 dark:bg-gray-700" */}

                {[...Array(pageCount).keys()].map((num) => {
                  const pageNum = num + 1;
                  const isOdd = pageCount % 2 === 1;
                  if (
                    pageCount > 12 &&
                    ((!isOdd && pageCount / num === 2) ||
                      (isOdd && (pageCount - 1) / num === 2))
                  ) {
                    return (
                      <span
                        key={num + 1}
                        className="relative inline-flex items-center border border-gray-300 bg-zinc-50 px-4 py-2 text-sm font-medium text-gray-700 dark:border-gray-900"
                      >
                        ...
                      </span>
                    );
                  }
                  if (
                    pageCount <= 12 ||
                    (!isOdd &&
                      (pageNum <= Math.ceil(pageCount / 4) ||
                        pageNum >= pageCount / 2 + Math.ceil(pageCount / 4))) ||
                    (isOdd &&
                      (pageNum <= Math.ceil((pageCount - 1) / 4) ||
                        pageNum >=
                          (pageCount - 1) / 2 + Math.ceil((pageCount - 1) / 4)))
                  ) {
                    const isCurrent = Boolean((skip + take) / take - 1 === num);
                    return (
                      <button
                        onClick={() => setSkip(num * take)}
                        key={num}
                        aria-current="page"
                        className={clsx(
                          isCurrent
                            ? "z-10 border-amber-500 bg-amber-50 text-amber-600"
                            : "border-gray-300 bg-zinc-50 text-gray-500 hover:bg-zinc-50 dark:border-gray-900 dark:bg-gray-700 dark:text-gray-200",
                          "relative z-10 inline-flex items-center border px-4 py-2 text-sm font-medium focus:z-20"
                        )}
                      >
                        {pageNum}
                      </button>
                    );
                  }

                  return null;
                })}
                <button
                  onClick={() =>
                    setSkip((s) => (s + take <= count ? s + take : s))
                  }
                  className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-zinc-50 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-zinc-50 focus:z-20 dark:border-gray-900 dark:bg-gray-700 dark:text-gray-200"
                >
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}