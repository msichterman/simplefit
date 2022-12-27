import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { TagOrderByRelationAggregateInputObjectSchema } from "./TagOrderByRelationAggregateInput.schema";
import { UserOrderByWithRelationAndSearchRelevanceInputObjectSchema } from "./UserOrderByWithRelationAndSearchRelevanceInput.schema";
import { UserOrderByRelationAggregateInputObjectSchema } from "./UserOrderByRelationAggregateInput.schema";
import { ExerciseOrderByRelationAggregateInputObjectSchema } from "./ExerciseOrderByRelationAggregateInput.schema";
import { WorkoutOrderByRelevanceInputObjectSchema } from "./WorkoutOrderByRelevanceInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutOrderByWithRelationAndSearchRelevanceInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      description: z.lazy(() => SortOrderSchema).optional(),
      tags: z
        .lazy(() => TagOrderByRelationAggregateInputObjectSchema)
        .optional(),
      author: z
        .lazy(() => UserOrderByWithRelationAndSearchRelevanceInputObjectSchema)
        .optional(),
      authorId: z.lazy(() => SortOrderSchema).optional(),
      savedBy: z
        .lazy(() => UserOrderByRelationAggregateInputObjectSchema)
        .optional(),
      exercises: z
        .lazy(() => ExerciseOrderByRelationAggregateInputObjectSchema)
        .optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      _relevance: z
        .lazy(() => WorkoutOrderByRelevanceInputObjectSchema)
        .optional(),
    })
    .strict();

export const WorkoutOrderByWithRelationAndSearchRelevanceInputObjectSchema =
  Schema;
