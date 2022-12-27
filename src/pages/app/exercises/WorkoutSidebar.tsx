import type { Dispatch, SetStateAction } from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { LinkIcon, QuestionMarkCircleIcon } from "@heroicons/react/20/solid";
import type { Exercise } from "@prisma/client";
import ExerciseTableCondensed from "./ExerciseTableCondensed";
import { zodResolver } from "@hookform/resolvers/zod";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { trpc } from "@/libs/utils/trpc";
import { WorkoutCreateOneSchema } from "@/server/trpc/generated/schemas";
import type { z } from "zod";

type WorkoutSidebarProps = {
  selectedExercises: Exercise[];
  setSelectedExercises: Dispatch<SetStateAction<Exercise[]>>;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export default function WorkoutSidebar({
  selectedExercises,
  setSelectedExercises,
  open,
  setOpen,
}: WorkoutSidebarProps) {
  type FormSchemaType = z.infer<typeof WorkoutCreateOneSchema>;

  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(WorkoutCreateOneSchema),
  });

  const workout = trpc.workout.createOneWorkout.useMutation({
    onSuccess() {
      reset();
    },
  });

  const onSubmit: SubmitHandler<FormSchemaType> = async ({ data }) => {
    const connectExercises = selectedExercises.map((e) => ({
      id: e.id,
    }));
    const workoutData = {
      ...data,
      exercises: {
        connect: connectExercises,
      },
    };
    workout.mutateAsync({ data: workoutData }).then((d) => console.log(d));
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <form
                    className="flex h-full flex-col divide-y divide-neutral-200 bg-white shadow-xl"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="h-0 flex-1 overflow-y-auto">
                      <div className="bg-amber-700 py-6 px-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <Dialog.Title className="text-lg font-medium text-white">
                            New Workout
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="rounded-md bg-amber-700 text-amber-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                        <div className="mt-1">
                          <p className="text-sm text-amber-300">
                            Get started by filling in the information below to
                            create your new workout.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div className="divide-y divide-neutral-200 px-4 sm:px-6">
                          <div className="space-y-6 pt-6 pb-5">
                            <div>
                              <label
                                htmlFor="data.name"
                                className="block text-sm font-medium text-neutral-900"
                              >
                                Workout name
                              </label>
                              <div className="mt-1">
                                <input
                                  {...register("data.name")}
                                  type="text"
                                  name="data.name"
                                  id="data.name"
                                  className="block w-full rounded-md border-neutral-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
                                />
                              </div>
                            </div>
                            <div>
                              <label
                                htmlFor="data.description"
                                className="block text-sm font-medium text-neutral-900"
                              >
                                Description
                              </label>
                              <div className="mt-1">
                                <textarea
                                  {...register("data.description")}
                                  id="data.description"
                                  name="data.description"
                                  rows={4}
                                  className="block w-full rounded-md border-neutral-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                            <div className="overflow-y-hidden">
                              <h3 className="mb-1 text-sm font-medium text-neutral-900">
                                Exercises
                              </h3>
                              <ExerciseTableCondensed
                                exercises={selectedExercises}
                                setExercises={setSelectedExercises}
                              />
                            </div>
                            <fieldset>
                              <legend className="text-sm font-medium text-neutral-900">
                                Privacy
                              </legend>
                              <div className="mt-2 space-y-5">
                                <div className="relative flex items-start">
                                  <div className="absolute flex h-5 items-center">
                                    <input
                                      id="privacy-public"
                                      name="privacy"
                                      aria-describedby="privacy-public-description"
                                      type="radio"
                                      className="h-4 w-4 border-neutral-300 text-amber-600 focus:ring-amber-500"
                                      defaultChecked
                                    />
                                  </div>
                                  <div className="pl-7 text-sm">
                                    <label
                                      htmlFor="privacy-public"
                                      className="font-medium text-neutral-900"
                                    >
                                      Public access
                                    </label>
                                    <p
                                      id="privacy-public-description"
                                      className="text-neutral-500"
                                    >
                                      Everyone will be able to see this workout.
                                    </p>
                                  </div>
                                </div>
                                <div>
                                  <div className="relative flex items-start">
                                    <div className="absolute flex h-5 items-center">
                                      <input
                                        id="privacy-private-to-workout"
                                        name="privacy"
                                        aria-describedby="privacy-private-to-workout-description"
                                        type="radio"
                                        className="h-4 w-4 border-neutral-300 text-amber-600 focus:ring-amber-500"
                                      />
                                    </div>
                                    <div className="pl-7 text-sm">
                                      <label
                                        htmlFor="privacy-private-to-workout"
                                        className="font-medium text-neutral-900"
                                      >
                                        Unlisted
                                      </label>
                                      <p
                                        id="privacy-private-to-workout-description"
                                        className="text-neutral-500"
                                      >
                                        Only users with the link can see this
                                        workout.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="relative flex items-start">
                                    <div className="absolute flex h-5 items-center">
                                      <input
                                        id="privacy-private"
                                        name="privacy"
                                        aria-describedby="privacy-private-to-workout-description"
                                        type="radio"
                                        className="h-4 w-4 border-neutral-300 text-amber-600 focus:ring-amber-500"
                                      />
                                    </div>
                                    <div className="pl-7 text-sm">
                                      <label
                                        htmlFor="privacy-private"
                                        className="font-medium text-neutral-900"
                                      >
                                        Private to you
                                      </label>
                                      <p
                                        id="privacy-private-description"
                                        className="text-neutral-500"
                                      >
                                        You are the only one able to access this
                                        workout.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </fieldset>
                          </div>
                          <div className="pt-4 pb-6">
                            <div className="flex text-sm">
                              <a
                                href="#"
                                className="group inline-flex items-center font-medium text-amber-600 hover:text-amber-900"
                              >
                                <LinkIcon
                                  className="h-5 w-5 text-amber-500 group-hover:text-amber-900"
                                  aria-hidden="true"
                                />
                                <span className="ml-2">Copy link</span>
                              </a>
                            </div>
                            <div className="mt-4 flex text-sm">
                              <a
                                href="#"
                                className="group inline-flex items-center text-neutral-500 hover:text-neutral-900"
                              >
                                <QuestionMarkCircleIcon
                                  className="h-5 w-5 text-neutral-400 group-hover:text-neutral-500"
                                  aria-hidden="true"
                                />
                                <span className="ml-2">
                                  Learn more about sharing
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-shrink-0 justify-end px-4 py-4">
                      <button
                        type="button"
                        className="rounded-md border border-neutral-300 bg-white py-2 px-4 text-sm font-medium text-neutral-700 shadow-sm hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                        onClick={() => setOpen(false)}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="ml-4 inline-flex justify-center rounded-md border border-transparent bg-amber-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
