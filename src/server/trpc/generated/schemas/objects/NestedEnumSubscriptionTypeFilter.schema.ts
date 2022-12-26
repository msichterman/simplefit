import { z } from "zod";
import { SubscriptionTypeSchema } from "../enums/SubscriptionType.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.NestedEnumSubscriptionTypeFilter> = z
  .object({
    equals: z.lazy(() => SubscriptionTypeSchema).optional(),
    in: z
      .lazy(() => SubscriptionTypeSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => SubscriptionTypeSchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => SubscriptionTypeSchema),
        z.lazy(() => NestedEnumSubscriptionTypeFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const NestedEnumSubscriptionTypeFilterObjectSchema = Schema;
