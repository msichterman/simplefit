import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { ExerciseOrderByRelationAggregateInputObjectSchema } from "./ExerciseOrderByRelationAggregateInput.schema";
import { WorkoutOrderByRelationAggregateInputObjectSchema } from "./WorkoutOrderByRelationAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TagOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    exercises: z
      .lazy(() => ExerciseOrderByRelationAggregateInputObjectSchema)
      .optional(),
    workouts: z
      .lazy(() => WorkoutOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagOrderByWithRelationInputObjectSchema = Schema;
