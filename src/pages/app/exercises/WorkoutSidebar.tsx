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
import { z } from "zod";
import { toast } from "react-hot-toast";

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
  const FormSchema = z.object({
    name: z.string().min(2).max(100),
    description: z.string().min(2).max(140).optional(),
  });
  type FormSchemaType = z.infer<typeof FormSchema>;

  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
  });

  const workout = trpc.workout.createOneWorkout.useMutation({
    onSuccess: () => {
      toast.success("Workout created");
      setOpen(false);
      reset();
    },
    onError: (error) => {
      toast.error("An error occurred. Try again.");
      console.error(error);
    },
  });

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    const connectExercises = selectedExercises.map((e) => ({
      id: e.id,
    }));
    const workoutData = {
      ...data,
      exercises: {
        connect: connectExercises,
      },
    };
    workout.mutate({ data: workoutData });
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
                                htmlFor="name"
                                className="block text-sm font-medium text-neutral-900"
                              >
                                Workout name
                              </label>
                              <div className="mt-1">
                                <input
                                  {...register("name")}
                                  type="text"
                                  name="name"
                                  id="name"
                                  className="block w-full rounded-md border-neutral-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
                                />
                              </div>
                            </div>
                            <div>
                              <label
                                htmlFor="description"
                                className="block text-sm font-medium text-neutral-900"
                              >
                                Description
                              </label>
                              <div className="mt-1">
                                <textarea
                                  {...register("description")}
                                  id="description"
                                  name="description"
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
                        disabled={workout.isLoading}
                        onClick={() => setOpen(false)}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={workout.isLoading}
                        className="ml-4 inline-flex items-center justify-center rounded-md border border-transparent bg-amber-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                      >
                        {workout.isLoading ? (
                          <>
                            Saving...
                            <svg
                              className="ml-2 inline h-4 w-4 animate-spin fill-amber-200 text-gray-200 dark:text-gray-600"
                              viewBox="0 0 100 101"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                              />
                              <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"
                              />
                            </svg>
                          </>
                        ) : (
                          <>Save</>
                        )}
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
