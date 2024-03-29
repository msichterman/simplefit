import { PRICING_TIERS } from "@/libs/pricing";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import type { ElementType } from "react";

type PricingTableProps = {
  firstHeadingComponent?: ElementType;
  secondHeadingComponent?: ElementType;
};

export default function PricingTable({
  firstHeadingComponent: HOne = "h1",
  secondHeadingComponent: HTwo = "h2",
}: PricingTableProps) {
  const router = useRouter();

  function onQuoteRequest(tierName: string) {
    router.push(
      {
        pathname: "/contact",
        query: { flow: `QUOTE_${tierName.toUpperCase()}` },
      },
      "contact"
    );
  }
  return (
    <div className="bg-neutral-800 dark:bg-neutral-900/20">
      <div className="relative overflow-hidden pt-32 pb-96 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <HOne className="text-lg font-semibold leading-8 text-amber-400">
              Pricing
            </HOne>
            <HTwo className="mt-2 text-3xl font-bold tracking-tight text-neutral-50 sm:text-4xl lg:text-5xl">
              Choose the Plan That&apos;s Right for You
            </HTwo>
            <p className="mt-6 text-lg leading-8 text-neutral-50/70 dark:text-caramel-100">
              From basic workouts to personalized training collections, explore
              our options to simply find your perfect fit.
            </p>
          </div>
        </div>
      </div>
      <div className="flow-root bg-neutral-50 pb-32 dark:bg-neutral-900/80 lg:pb-40">
        <div className="relative -mt-80">
          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="mx-auto grid grid-cols-1 gap-8 px-4 lg:grid-cols-3 lg:gap-8">
              {PRICING_TIERS.map((tier) => (
                <div
                  key={tier.name}
                  className="flex flex-col rounded-3xl bg-neutral-100 shadow-xl ring-1 ring-black/10 dark:bg-neutral-800"
                >
                  <div className="p-8 sm:p-10">
                    {tier.badge ? (
                      <div className="h-8">
                        <div className="box-border w-min animate-pulse whitespace-nowrap rounded-md border border-amber-600 bg-amber-100 px-2.5 py-0.5 text-tiny font-semibold text-amber-600 dark:bg-amber-800 dark:text-amber-50">
                          {tier.badge}
                        </div>
                      </div>
                    ) : (
                      <div className="h-8" />
                    )}
                    <h3
                      className="text-lg font-semibold leading-8 tracking-tight text-amber-600 dark:text-cyan-300"
                      id={tier.id.toString()}
                    >
                      {tier.name}
                    </h3>
                    <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-neutral-900  dark:text-caramel-100">
                      <>
                        ${tier.prices[0]?.value}
                        <span className="ml-2 text-lg font-semibold leading-8 tracking-normal text-neutral-500">
                          / month
                        </span>
                      </>
                    </div>
                    <p className="mt-6 text-base leading-7 text-neutral-600 dark:text-caramel-200">
                      {tier.description}
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col p-2">
                    <div className="flex flex-1 flex-col justify-between rounded-3xl bg-neutral-50 p-6 dark:bg-neutral-700/30 sm:p-8">
                      <ul className="space-y-6">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon
                                className="h-6 w-6 text-amber-600 dark:text-cyan-300"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-3 text-sm leading-6 text-neutral-600 dark:text-caramel-100">
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <button
                          onClick={() => onQuoteRequest(tier.name)}
                          className="inline-block w-full rounded-lg bg-amber-600 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-neutral-50 shadow-md hover:bg-amber-700"
                          aria-label={`Get a quote for the ${tier.name} tier`}
                        >
                          {tier.cta}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
