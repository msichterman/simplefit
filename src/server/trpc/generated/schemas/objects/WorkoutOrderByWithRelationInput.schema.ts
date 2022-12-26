import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { TagOrderByRelationAggregateInputObjectSchema } from "./TagOrderByRelationAggregateInput.schema";
import { UserOrderByWithRelationInputObjectSchema } from "./UserOrderByWithRelationInput.schema";
import { UserOrderByRelationAggregateInputObjectSchema } from "./UserOrderByRelationAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutOrderByWithRelationAndSearchRelevanceInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      tags: z
        .lazy(() => TagOrderByRelationAggregateInputObjectSchema)
        .optional(),
      author: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
      authorId: z.lazy(() => SortOrderSchema).optional(),
      savedBy: z
        .lazy(() => UserOrderByRelationAggregateInputObjectSchema)
        .optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const WorkoutOrderByWithRelationInputObjectSchema = Schema;
