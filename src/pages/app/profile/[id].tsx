import AppLayout from "@/layouts/AppLayout";
import { fallbackAvatar } from "@/libs/utils/objectUtils";
import { useSession } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();
  const user = session?.user;

  if (!user) {
    return null;
  }

  return (
    <AppLayout>
      <div className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50">
            Profile
          </h1>
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-200">
            This information will be displayed publicly so be careful what you
            share.
          </p>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="py-4">
            <form
              className="divide-y divide-neutral-200 dark:divide-neutral-900 lg:col-span-9"
              action="#"
              method="POST"
            >
              {/* Profile section */}
              <div className="py-6 lg:pb-8">
                <div className="mt-6 flex flex-col lg:flex-row">
                  <div className="flex-grow space-y-6">
                    <div>
                      <label
                        htmlFor="username"
                        className="block text-sm font-medium text-neutral-700 dark:text-neutral-100"
                      >
                        Username
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center rounded-l-md border border-r-0 border-neutral-300 bg-neutral-50 px-3 text-neutral-500 dark:border-neutral-900 dark:bg-neutral-900 dark:text-neutral-200 sm:text-sm">
                          simplefit.ai/
                        </span>
                        <input
                          type="text"
                          name="username"
                          id="username"
                          autoComplete="username"
                          className="block w-full min-w-0 flex-grow rounded-none rounded-r-md border-neutral-300 bg-neutral-50 text-neutral-700 focus:border-amber-500 focus:ring-amber-500 dark:border-neutral-900 dark:bg-neutral-700 dark:text-neutral-200 sm:text-sm"
                          defaultValue={user?.username}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium text-neutral-700 dark:text-neutral-100"
                      >
                        About
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="about"
                          name="about"
                          rows={3}
                          className="mt-1 block w-full rounded-md border-neutral-300 bg-neutral-50 text-neutral-700 shadow-sm focus:border-amber-500 focus:ring-amber-500 dark:border-neutral-900 dark:bg-neutral-700 dark:text-neutral-200 sm:text-sm"
                          defaultValue={""}
                        />
                      </div>
                      <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-200">
                        Brief description for your profile. URLs are
                        hyperlinked.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-shrink-0 lg:flex-grow-0">
                    <p
                      className="text-sm font-medium text-neutral-700 dark:text-neutral-100"
                      aria-hidden="true"
                    >
                      Photo
                    </p>
                    <div className="mt-1 lg:hidden">
                      <div className="flex items-center">
                        <div
                          className="inline-block h-12 w-12 flex-shrink-0 overflow-hidden rounded-full"
                          aria-hidden="true"
                        >
                          <img
                            className="h-full w-full rounded-full"
                            src={
                              user?.image || fallbackAvatar(session.user?.name)
                            }
                            alt=""
                          />
                        </div>
                        <div className="ml-5 rounded-md shadow-sm">
                          <div className="group relative flex items-center justify-center rounded-md border border-neutral-300 py-2 px-3 focus-within:ring-2 focus-within:ring-amber-500 focus-within:ring-offset-2 hover:bg-neutral-50 dark:border-neutral-900 dark:bg-neutral-900">
                            <label
                              htmlFor="mobile-user-photo"
                              className="pointer-events-none relative text-sm font-medium leading-4 text-neutral-700 dark:text-neutral-100"
                            >
                              <span>Change</span>
                              <span className="sr-only"> user photo</span>
                            </label>
                            <input
                              id="mobile-user-photo"
                              name="user-photo"
                              type="file"
                              className="absolute h-full w-full cursor-pointer rounded-md border-neutral-300 opacity-0 dark:border-neutral-900"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative hidden overflow-hidden rounded-full lg:block">
                      <img
                        className="relative h-40 w-40 rounded-full"
                        src={user?.image || fallbackAvatar(session.user?.name)}
                        alt=""
                      />
                      <label
                        htmlFor="desktop-user-photo"
                        className="absolute inset-0 flex h-full w-full items-center justify-center bg-black bg-opacity-75 text-sm font-medium text-white opacity-0 focus-within:opacity-100 hover:opacity-100"
                      >
                        <span>Change</span>
                        <span className="sr-only"> user photo</span>
                        <input
                          type="file"
                          id="desktop-user-photo"
                          name="user-photo"
                          className="absolute inset-0 h-full w-full cursor-pointer rounded-md border-neutral-300 opacity-0 dark:border-neutral-900"
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-12 gap-6">
                  <div className="col-span-12">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-neutral-700 dark:text-neutral-100"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="mt-1 block w-full rounded-md border border-neutral-300 bg-neutral-50 py-2 px-3 text-neutral-700 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-amber-500 dark:border-neutral-900 dark:bg-neutral-700 dark:text-neutral-200 sm:text-sm"
                      disabled={true}
                      value={user?.name || undefined}
                    />
                  </div>

                  <div className="col-span-12">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-700 dark:text-neutral-100"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="mt-1 block w-full rounded-md border border-neutral-300 bg-neutral-50 py-2 px-3 text-neutral-700 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-amber-500 dark:border-neutral-900 dark:bg-neutral-700 dark:text-neutral-200 sm:text-sm"
                      disabled={true}
                      value={user?.email || undefined}
                    />
                  </div>
                </div>
              </div>

              <div className="divide-y divide-neutral-200 pt-6 dark:divide-neutral-900">
                <div className="mt-4 flex justify-end py-4 px-4 sm:px-6">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-neutral-300 bg-white py-2 px-4 text-sm font-medium text-neutral-700 shadow-sm hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 dark:border-neutral-900 dark:bg-neutral-900 dark:text-neutral-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="ml-5 inline-flex justify-center rounded-md border border-transparent bg-amber-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
