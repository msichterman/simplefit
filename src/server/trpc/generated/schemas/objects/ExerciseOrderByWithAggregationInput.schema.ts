import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { ExerciseCountOrderByAggregateInputObjectSchema } from "./ExerciseCountOrderByAggregateInput.schema";
import { ExerciseAvgOrderByAggregateInputObjectSchema } from "./ExerciseAvgOrderByAggregateInput.schema";
import { ExerciseMaxOrderByAggregateInputObjectSchema } from "./ExerciseMaxOrderByAggregateInput.schema";
import { ExerciseMinOrderByAggregateInputObjectSchema } from "./ExerciseMinOrderByAggregateInput.schema";
import { ExerciseSumOrderByAggregateInputObjectSchema } from "./ExerciseSumOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExerciseOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    difficulty: z.lazy(() => SortOrderSchema).optional(),
    sets: z.lazy(() => SortOrderSchema).optional(),
    reps: z.lazy(() => SortOrderSchema).optional(),
    rest: z.lazy(() => SortOrderSchema).optional(),
    exampleLink: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ExerciseCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => ExerciseAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ExerciseMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ExerciseMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ExerciseSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ExerciseOrderByWithAggregationInputObjectSchema = Schema;
