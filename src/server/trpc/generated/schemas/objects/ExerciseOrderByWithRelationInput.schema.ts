import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { TagOrderByRelationAggregateInputObjectSchema } from "./TagOrderByRelationAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExerciseOrderByWithRelationAndSearchRelevanceInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      difficulty: z.lazy(() => SortOrderSchema).optional(),
      sets: z.lazy(() => SortOrderSchema).optional(),
      reps: z.lazy(() => SortOrderSchema).optional(),
      rest: z.lazy(() => SortOrderSchema).optional(),
      tags: z
        .lazy(() => TagOrderByRelationAggregateInputObjectSchema)
        .optional(),
      exampleLink: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ExerciseOrderByWithRelationInputObjectSchema = Schema;
