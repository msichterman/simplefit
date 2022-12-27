import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { AccountOrderByRelationAggregateInputObjectSchema } from "./AccountOrderByRelationAggregateInput.schema";
import { SessionOrderByRelationAggregateInputObjectSchema } from "./SessionOrderByRelationAggregateInput.schema";
import { CustomerPaymentOrderByWithRelationAndSearchRelevanceInputObjectSchema } from "./CustomerPaymentOrderByWithRelationAndSearchRelevanceInput.schema";
import { WorkoutOrderByRelationAggregateInputObjectSchema } from "./WorkoutOrderByRelationAggregateInput.schema";
import { UserOrderByRelevanceInputObjectSchema } from "./UserOrderByRelevanceInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserOrderByWithRelationAndSearchRelevanceInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      emailVerified: z.lazy(() => SortOrderSchema).optional(),
      image: z.lazy(() => SortOrderSchema).optional(),
      accounts: z
        .lazy(() => AccountOrderByRelationAggregateInputObjectSchema)
        .optional(),
      sessions: z
        .lazy(() => SessionOrderByRelationAggregateInputObjectSchema)
        .optional(),
      role: z.lazy(() => SortOrderSchema).optional(),
      customerPayment: z
        .lazy(
          () =>
            CustomerPaymentOrderByWithRelationAndSearchRelevanceInputObjectSchema
        )
        .optional(),
      authoredWorkouts: z
        .lazy(() => WorkoutOrderByRelationAggregateInputObjectSchema)
        .optional(),
      savedWorkouts: z
        .lazy(() => WorkoutOrderByRelationAggregateInputObjectSchema)
        .optional(),
      username: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      _relevance: z
        .lazy(() => UserOrderByRelevanceInputObjectSchema)
        .optional(),
    })
    .strict();

export const UserOrderByWithRelationAndSearchRelevanceInputObjectSchema =
  Schema;