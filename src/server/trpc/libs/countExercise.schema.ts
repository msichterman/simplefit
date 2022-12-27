import { z } from "zod";
import { ExerciseOrderByWithRelationAndSearchRelevanceInputObjectSchema } from "../generated/schemas/objects/ExerciseOrderByWithRelationAndSearchRelevanceInput.schema";
import { ExerciseWhereInputObjectSchema } from "../generated/schemas/objects/ExerciseWhereInput.schema";
import { ExerciseWhereUniqueInputObjectSchema } from "../generated/schemas/objects/ExerciseWhereUniqueInput.schema";
import { ExerciseCountAggregateInputObjectSchema } from "../generated/schemas/objects/ExerciseCountAggregateInput.schema";

export const ExerciseCountSchema = z.object({
  orderBy: z
    .union([
      ExerciseOrderByWithRelationAndSearchRelevanceInputObjectSchema,
      ExerciseOrderByWithRelationAndSearchRelevanceInputObjectSchema.array(),
    ])
    .optional(),
  where: ExerciseWhereInputObjectSchema.optional(),
  cursor: ExerciseWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  select: ExerciseCountAggregateInputObjectSchema.optional(),
});
