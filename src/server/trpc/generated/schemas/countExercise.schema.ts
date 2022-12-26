import { z } from "zod";
import { ExerciseOrderByWithRelationInputObjectSchema } from "./objects/ExerciseOrderByWithRelationInput.schema";
import { ExerciseWhereInputObjectSchema } from "./objects/ExerciseWhereInput.schema";
import { ExerciseWhereUniqueInputObjectSchema } from "./objects/ExerciseWhereUniqueInput.schema";
import { ExerciseCountAggregateInputObjectSchema } from "./objects/ExerciseCountAggregateInput.schema";

export const ExerciseCountSchema = z.object({
  orderBy: z
    .union([
      ExerciseOrderByWithRelationInputObjectSchema,
      ExerciseOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ExerciseWhereInputObjectSchema.optional(),
  cursor: ExerciseWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  select: ExerciseCountAggregateInputObjectSchema.optional(),
});
