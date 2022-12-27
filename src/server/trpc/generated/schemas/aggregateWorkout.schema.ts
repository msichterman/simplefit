import { z } from "zod";
import { WorkoutOrderByWithRelationAndSearchRelevanceInputObjectSchema } from "./objects/WorkoutOrderByWithRelationAndSearchRelevanceInput.schema";
import { WorkoutWhereInputObjectSchema } from "./objects/WorkoutWhereInput.schema";
import { WorkoutWhereUniqueInputObjectSchema } from "./objects/WorkoutWhereUniqueInput.schema";
import { WorkoutCountAggregateInputObjectSchema } from "./objects/WorkoutCountAggregateInput.schema";
import { WorkoutMinAggregateInputObjectSchema } from "./objects/WorkoutMinAggregateInput.schema";
import { WorkoutMaxAggregateInputObjectSchema } from "./objects/WorkoutMaxAggregateInput.schema";
import { WorkoutAvgAggregateInputObjectSchema } from "./objects/WorkoutAvgAggregateInput.schema";
import { WorkoutSumAggregateInputObjectSchema } from "./objects/WorkoutSumAggregateInput.schema";

export const WorkoutAggregateSchema = z.object({
  orderBy: z
    .union([
      WorkoutOrderByWithRelationAndSearchRelevanceInputObjectSchema,
      WorkoutOrderByWithRelationAndSearchRelevanceInputObjectSchema.array(),
    ])
    .optional(),
  where: WorkoutWhereInputObjectSchema.optional(),
  cursor: WorkoutWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), WorkoutCountAggregateInputObjectSchema])
    .optional(),
  _min: WorkoutMinAggregateInputObjectSchema.optional(),
  _max: WorkoutMaxAggregateInputObjectSchema.optional(),
  _avg: WorkoutAvgAggregateInputObjectSchema.optional(),
  _sum: WorkoutSumAggregateInputObjectSchema.optional(),
});
