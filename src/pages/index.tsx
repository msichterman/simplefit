import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import PricingTable from "../components/PricingTable";
import PageLayout from "@/layouts/PageLayout";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import ResultBadge from "@/components/ResultBadge";
import clsx from "clsx";
import JumpRopeIllustration from "@/components/vectors/JumpRopeIllustration";

const Home: NextPage = () => {
  const FormSchema = z.object({
    email: z.string().email(),
  });

  type FormSchemaType = z.infer<typeof FormSchema>;

  const emailListform = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
  });

  const onTalkSoonSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    emailListform.clearErrors();
    // Submit data.email
  };

  return (
    <PageLayout>
      <Head>
        <title>Simple Fit – Home</title>
        <meta
          name="description"
          content="Website development for growing businesses"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Hero section */}
        <div className="z-0 overflow-hidden pt-8 sm:pt-12 lg:relative lg:py-24">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div>
              <div className="mt-12">
                <div>
                  <span className="rounded border border-amber-600 bg-amber-50 px-2.5 py-1 text-tiny font-semibold uppercase tracking-wide text-amber-700 dark:bg-amber-800/60 dark:text-caramel-100">
                    Hit the gym
                  </span>
                </div>
                <div className="mt-6 space-y-8">
                  <h1 className="text-3xl font-bold text-zinc-900  dark:text-caramel-100 lg:text-4xl lg:font-extrabold xl:text-5xl">
                    Simple, tailored workouts at your fingertips.
                  </h1>
                  <p className="mt-6 text-xl dark:text-caramel-200">
                    Find the perfect workouts for your body and your lifestyle.
                    Start living healthier today!
                  </p>
                  <Link
                    className="block w-full rounded-md border border-transparent bg-amber-600 px-5 py-3 text-center text-base font-medium text-zinc-50 shadow hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 sm:max-w-fit sm:px-10"
                    href="/sign-up"
                  >
                    Let&apos;s get started
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden sm:mx-auto sm:max-w-3xl sm:px-6 lg:block">
            <div className="pt-12 sm:relative sm:mt-12 sm:pt-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <div>
                <div className="absolute inset-y-0 left-1/2 w-screen rounded-l-3xl bg-zinc-50 dark:bg-zinc-900/50 lg:left-80 lg:right-0 lg:w-full" />
                <svg
                  className="absolute top-8 right-1/2 -mr-3 lg:left-0 lg:m-0"
                  width={404}
                  height={392}
                  fill="none"
                  viewBox="0 0 404 392"
                >
                  <defs>
                    <pattern
                      id="837c3e70-6c3a-44e6-8854-cc48c737b659"
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
                        className="text-zinc-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={392}
                    fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                  />
                </svg>
              </div>
              <div className="relative -mr-40 hidden pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:block lg:h-[560px] lg:max-w-none">
                <JumpRopeIllustration className="w-full rounded-md px-10 lg:w-auto lg:max-w-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial/stats section */}
        <div className="relative my-20">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
            <div className="relative sm:py-16 lg:py-0">
              <div
                aria-hidden="true"
                className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
              >
                <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-zinc-50 dark:bg-zinc-900/50 lg:right-72" />
                <svg
                  className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                  width={404}
                  height={392}
                  fill="none"
                  viewBox="0 0 404 392"
                >
                  <defs>
                    <pattern
                      id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
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
                        className="text-zinc-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={392}
                    fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                  />
                </svg>
              </div>
              <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
                {/* Testimonial card*/}
                <div className="relative overflow-hidden rounded-3xl pt-64">
                  <Image
                    className="absolute inset-0 mb-8 h-full w-full object-cover object-bottom grayscale"
                    src="/MattFootball.webp"
                    width={400}
                    height={800}
                    alt=""
                  />
                  <div className="absolute inset-0 bg-amber-600 mix-blend-multiply" />
                  <div className="bg-gradient-to-t absolute inset-0 from-amber-700 via-amber-700 opacity-50" />
                  <div className="relative bg-zinc-900/50 px-8 py-5 backdrop-blur-sm">
                    <blockquote className="mt-8">
                      <div className="relative text-base font-medium text-zinc-50 md:flex-grow">
                        <svg
                          className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-amber-700"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="relative">
                          Simple Fit has helped me lose 50 lbs while maintaining
                          strength. The personalized workout collections have
                          been a game-changer, and the advanced tracking and
                          progress monitoring has kept me motivated.
                        </p>
                      </div>

                      <footer className="mt-4">
                        <p className="text-base font-semibold text-amber-200">
                          Matt Sichterman,{" "}
                          <span className="text-tiny font-normal">
                            Former Offensive Lineman at the University of
                            Nebraska
                          </span>
                        </p>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
              {/* Content area */}
              <div className="pt-12 sm:pt-16 lg:pt-20">
                <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900  dark:text-caramel-100 sm:text-4xl">
                  Your one-stop destination for personalized workouts powered by
                  AI!
                </h2>
                <div className="leading-7prose-zinc prose mt-6 space-y-6 text-base dark:prose-invert">
                  <p>
                    With Simple Fit, you can browse a wide range of workouts
                    tailored to your specific needs. Whether you&apos;re looking
                    to tone up, build muscle, or improve your overall fitness,
                    we&apos;ve got you covered.
                  </p>
                  <p>
                    And if you don&apos;t see a workout that meets your needs,
                    you can easily create your own by aggregating exercises from
                    our extensive library.
                  </p>
                  <p>
                    But it doesn&apos;t stop there. Simple Fit also makes it
                    easy to plan out your week by allowing you to combine
                    workouts into collections. This way, you can easily decide
                    which workouts to do each day, ensuring that you stay on
                    track and make progress towards your fitness goals.
                  </p>
                  <p>
                    So why wait? Start living a healthier lifestyle today with
                    Simple Fit.
                  </p>
                </div>
                <div className="mt-4">
                  <Link
                    href="/sign-up"
                    className="text-base font-medium text-amber-600 dark:text-cyan-400"
                  >
                    Start today for free! &nbsp;&rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <PricingTable firstHeadingComponent="h2" secondHeadingComponent="h3" />

        {/* CTA section */}
        <div className="relative mt-24 sm:mt-32 sm:py-16">
          <div aria-hidden="true" className="hidden sm:block">
            <div className="absolute inset-y-0 left-0 w-1/2 rounded-r-3xl bg-zinc-50 dark:bg-zinc-900/50" />
            <svg
              className="absolute top-8 left-1/2 -ml-3"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
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
                    className="text-zinc-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
              />
            </svg>
          </div>
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-amber-600 px-6 py-10 shadow-xl sm:px-12 sm:py-20">
              <div
                aria-hidden="true"
                className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 1463 360"
                >
                  <path
                    className="text-amber-400 text-opacity-40"
                    fill="currentColor"
                    d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                  />
                  <path
                    className="text-amber-700 text-opacity-40"
                    fill="currentColor"
                    d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                  />
                </svg>
              </div>
              <div className="relative">
                <div className="sm:text-center">
                  <h2 className="text-2xl font-extrabold tracking-tight text-zinc-50 sm:text-3xl">
                    Sign up for our newsletter today and start your journey to a
                    healthier, fitter you!
                  </h2>
                  <p className="mx-auto mt-6 max-w-2xl text-lg text-amber-100">
                    Discover new workouts and exercises, learn from our expert
                    trainers, and get exclusive access to promotions and
                    discounts.
                  </p>
                </div>
                <form
                  onSubmit={emailListform.handleSubmit(onTalkSoonSubmit)}
                  className="mt-12 sm:mx-auto sm:max-w-lg"
                >
                  <div className="sm:flex">
                    <div className="min-w-0 flex-1">
                      <label htmlFor="talk-soon-email" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="talk-soon-email"
                        type="email"
                        autoComplete="email"
                        {...emailListform.register("email")}
                        className={clsx(
                          emailListform.formState.errors.email
                            ? "error-input"
                            : "input",
                          "h-full"
                        )}
                        placeholder="Email address"
                        disabled={emailListform.formState.isSubmitting}
                      />
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-3">
                      <button
                        type="submit"
                        className="block w-full rounded-md border border-transparent bg-zinc-900 px-5 py-3 text-base font-medium text-zinc-50 shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-zinc-50 focus:ring-offset-2 focus:ring-offset-amber-600 sm:px-10"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                  <ResultBadge
                    isError={Boolean(emailListform.formState.errors?.email)}
                    errorMessage="Please enter a valid email."
                    className="mt-2"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default Home;
