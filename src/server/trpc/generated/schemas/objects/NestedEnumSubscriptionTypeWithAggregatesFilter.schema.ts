import { z } from "zod";
import { SubscriptionTypeSchema } from "../enums/SubscriptionType.schema";
import { NestedIntFilterObjectSchema } from "./NestedIntFilter.schema";
import { NestedEnumSubscriptionTypeFilterObjectSchema } from "./NestedEnumSubscriptionTypeFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.NestedEnumSubscriptionTypeWithAggregatesFilter> =
  z
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
          z.lazy(
            () => NestedEnumSubscriptionTypeWithAggregatesFilterObjectSchema
          ),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
      _min: z
        .lazy(() => NestedEnumSubscriptionTypeFilterObjectSchema)
        .optional(),
      _max: z
        .lazy(() => NestedEnumSubscriptionTypeFilterObjectSchema)
        .optional(),
    })
    .strict();

export const NestedEnumSubscriptionTypeWithAggregatesFilterObjectSchema =
  Schema;
