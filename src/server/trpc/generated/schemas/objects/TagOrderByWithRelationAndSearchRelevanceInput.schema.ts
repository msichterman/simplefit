import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { ExerciseOrderByRelationAggregateInputObjectSchema } from "./ExerciseOrderByRelationAggregateInput.schema";
import { WorkoutOrderByRelationAggregateInputObjectSchema } from "./WorkoutOrderByRelationAggregateInput.schema";
import { TagOrderByRelevanceInputObjectSchema } from "./TagOrderByRelevanceInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TagOrderByWithRelationAndSearchRelevanceInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      exercises: z
        .lazy(() => ExerciseOrderByRelationAggregateInputObjectSchema)
        .optional(),
      workouts: z
        .lazy(() => WorkoutOrderByRelationAggregateInputObjectSchema)
        .optional(),
      _relevance: z.lazy(() => TagOrderByRelevanceInputObjectSchema).optional(),
    })
    .strict();

export const TagOrderByWithRelationAndSearchRelevanceInputObjectSchema = Schema;
