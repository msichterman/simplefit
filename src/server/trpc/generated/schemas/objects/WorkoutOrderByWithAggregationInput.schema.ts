import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { WorkoutCountOrderByAggregateInputObjectSchema } from "./WorkoutCountOrderByAggregateInput.schema";
import { WorkoutAvgOrderByAggregateInputObjectSchema } from "./WorkoutAvgOrderByAggregateInput.schema";
import { WorkoutMaxOrderByAggregateInputObjectSchema } from "./WorkoutMaxOrderByAggregateInput.schema";
import { WorkoutMinOrderByAggregateInputObjectSchema } from "./WorkoutMinOrderByAggregateInput.schema";
import { WorkoutSumOrderByAggregateInputObjectSchema } from "./WorkoutSumOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    authorId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => WorkoutCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => WorkoutAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => WorkoutMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => WorkoutMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => WorkoutSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const WorkoutOrderByWithAggregationInputObjectSchema = Schema;
