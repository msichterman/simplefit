import { z } from "zod";
import { WorkoutIncludeObjectSchema } from "./objects/WorkoutInclude.schema";
import { WorkoutOrderByWithRelationAndSearchRelevanceInputObjectSchema } from "./objects/WorkoutOrderByWithRelationAndSearchRelevanceInput.schema";
import { WorkoutWhereInputObjectSchema } from "./objects/WorkoutWhereInput.schema";
import { WorkoutWhereUniqueInputObjectSchema } from "./objects/WorkoutWhereUniqueInput.schema";
import { WorkoutScalarFieldEnumSchema } from "./enums/WorkoutScalarFieldEnum.schema";

export const WorkoutFindManySchema = z.object({
  include: z.lazy(() => WorkoutIncludeObjectSchema.optional()),
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
  distinct: z.array(WorkoutScalarFieldEnumSchema).optional(),
});
