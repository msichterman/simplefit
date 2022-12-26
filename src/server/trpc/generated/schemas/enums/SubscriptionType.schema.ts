import { z } from "zod";

export const SubscriptionTypeSchema = z.enum([
  "FREE",
  "PRO",
  "ELITE",
  "UNLIMITED",
]);
