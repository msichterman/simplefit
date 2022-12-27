import { z } from "zod";
import { ExerciseIncludeObjectSchema } from "./objects/ExerciseInclude.schema";
import { ExerciseOrderByWithRelationAndSearchRelevanceInputObjectSchema } from "./objects/ExerciseOrderByWithRelationAndSearchRelevanceInput.schema";
import { ExerciseWhereInputObjectSchema } from "./objects/ExerciseWhereInput.schema";
import { ExerciseWhereUniqueInputObjectSchema } from "./objects/ExerciseWhereUniqueInput.schema";
import { ExerciseScalarFieldEnumSchema } from "./enums/ExerciseScalarFieldEnum.schema";

export const ExerciseFindManySchema = z.object({
  include: z.lazy(() => ExerciseIncludeObjectSchema.optional()),
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
  distinct: z.array(ExerciseScalarFieldEnumSchema).optional(),
});
