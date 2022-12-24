export type PricingTier = {
  id: number;
  name: "Free" | "Pro" | "Elite";
  description: string | null;
  cta: string;
  active: boolean;
  href: string;
  badge: string | null;
  features: string[];
  prices: {
    term: string;
    value: number;
    active: boolean;
  }[];
};

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 0,
    name: "Free",
    description:
      "Get started on your fitness journey with access to basic workouts and basic progress tracking.",
    cta: "Get started for free",
    href: "/contact",
    active: true,
    badge: null,
    features: [
      "Access to a Limited Number of Exercises",
      "Basic Selection of Curated Workouts",
      "Create and Save 3 Custom Workouts",
      "Basic Tracking and Progress Monitoring",
      "Email Support",
    ],
    prices: [
      {
        term: "Monthly",
        value: 0,
        active: true,
      },
      {
        term: "Yearly",
        value: 1990,
        active: false,
      },
      {
        term: "One-time",
        value: 3995,
        active: false,
      },
    ],
  },
  {
    id: 1,
    name: "Pro",
    description:
      "Elevate your fitness with personalized workout plans, progress tracking, and nutritional guidance.",
    cta: "Elevate your fitness",
    href: "/contact",
    active: true,
    badge: null,
    features: [
      "Unlimited Access to all Exercises",
      "Unlimited Access to all Workouts",
      "Limited Access to Curated Workout Collections",
      "Advanced Tracking and Progress Monitoring",
      "Priority support",
    ],
    prices: [
      {
        term: "Monthly",
        value: 9,
        active: true,
      },
      {
        term: "Yearly",
        value: 3490,
        active: false,
      },
      {
        term: "One-time",
        value: 7995,
        active: false,
      },
    ],
  },
  {
    id: 2,
    name: "Elite",
    description:
      "Maximize your results with advanced progress tracking and reporting, and pre-made workout collections.",
    cta: "Maximize your results",
    href: "/contact",
    active: true,
    badge: "Best value",
    features: [
      "All Features of the Pro Tier",
      "Unlimited Access to Curated Workout Collections",
      "3rd Party Integrations",
      "Advanced Tracking and Progress Monitoring",
      "Priority support",
    ],
    prices: [
      {
        term: "Monthly",
        value: 19,
        active: true,
      },
      {
        term: "Yearly",
        value: 4990,
        active: false,
      },
      {
        term: "One-time",
        value: 11995,
        active: false,
      },
    ],
  },
];
