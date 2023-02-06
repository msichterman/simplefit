import AuthLayout from "@/layouts/AuthLayout";
import { signIn, useSession } from "next-auth/react";
import { z } from "zod";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SimpleFitIcon from "@/components/vectors/SimpleFitIcon";
import FullPageSpinner from "@/components/utils/FullPageSpinner";
import Link from "next/link";

export default function SignIn() {
  const { data: session, status } = useSession();

  const FormSchema = z.object({
    email: z.string().email(),
  });

  type FormSchemaType = z.infer<typeof FormSchema>;

  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    clearErrors();
    // signInWithEmail(data.email);
  };

  if (status === "loading") {
    return <FullPageSpinner />;
  }

  return (
    <AuthLayout>
      <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="w-full">
            <div>
              <SimpleFitIcon className="relative h-12 w-auto max-w-full text-amber-600" />
            </div>
            {session ? (
              <h2>hi {session.user?.name}</h2>
            ) : (
              <h2 className="dark:text-neutral-50dark:text-neutral-50 mt-6 text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 dark:text-neutral-50">
                Sign up to your account
              </h2>
            )}
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-100">
              Already have an account?{" "}
              <Link
                href="sign-in"
                className="font-medium text-amber-600 hover:text-amber-500"
              >
                Sign in instead!
              </Link>
            </p>
          </div>

          <div className="mt-8">
            <div>
              <div>
                <p className="text-sm font-medium text-neutral-600 dark:text-neutral-100">
                  Sign up with
                </p>

                <div className="mt-1 grid grid-cols-2 gap-3">
                  <div>
                    <button
                      onClick={() => signIn("google")}
                      className="inline-flex w-full justify-center rounded-md border border-neutral-300 bg-neutral-50 py-2 px-4 text-sm font-medium text-neutral-500 shadow-sm hover:bg-neutral-50"
                    >
                      <span className="sr-only">Sign up with Google</span>
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M19.456 8.15401C19.579 8.81301 19.646 9.50201 19.646 10.221C19.646 15.845 15.882 19.844 10.197 19.844C8.90415 19.8444 7.6239 19.59 6.42939 19.0955C5.23489 18.6009 4.14954 17.8758 3.23536 16.9616C2.32118 16.0475 1.59609 14.9621 1.10152 13.7676C0.606957 12.5731 0.352603 11.2929 0.352997 10C0.352603 8.70716 0.606957 7.42691 1.10152 6.2324C1.59609 5.0379 2.32118 3.95255 3.23536 3.03837C4.14954 2.12419 5.23489 1.3991 6.42939 0.904533C7.6239 0.409966 8.90415 0.155612 10.197 0.156006C12.855 0.156006 15.076 1.13401 16.78 2.72201L14.005 5.49701V5.49001C12.972 4.50601 11.661 4.00101 10.197 4.00101C6.949 4.00101 4.309 6.74501 4.309 9.99401C4.309 13.242 6.949 15.992 10.197 15.992C13.144 15.992 15.15 14.307 15.562 11.993H10.197V8.15401H19.457H19.456Z" />
                      </svg>
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => signIn("twitter")}
                      className="inline-flex w-full justify-center rounded-md border border-neutral-300 bg-neutral-50 py-2 px-4 text-sm font-medium text-neutral-500 shadow-sm hover:bg-neutral-50"
                    >
                      <span className="sr-only">Sign up with Twitter</span>
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="relative mt-6">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-neutral-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-neutral-50 px-2 text-neutral-500 dark:bg-neutral-900 dark:text-neutral-100">
                    Or continue with
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <form
                onSubmit={handleSubmit(onSubmit)}
                onBlur={() => clearErrors()}
                className="space-y-4"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-600 dark:text-neutral-100"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full appearance-none rounded-md border border-neutral-300 px-3 py-2 placeholder-neutral-400 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-amber-500 dark:bg-neutral-900 dark:placeholder-neutral-200 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-amber-600 py-2 px-4 text-sm font-medium text-neutral-50 shadow-sm hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                  >
                    Send magic link
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
