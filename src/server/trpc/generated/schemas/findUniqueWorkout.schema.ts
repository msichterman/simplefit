import { z } from "zod";
import { WorkoutIncludeObjectSchema } from "./objects/WorkoutInclude.schema";
import { WorkoutWhereUniqueInputObjectSchema } from "./objects/WorkoutWhereUniqueInput.schema";

export const WorkoutFindUniqueSchema = z.object({
  include: WorkoutIncludeObjectSchema.optional(),
  where: WorkoutWhereUniqueInputObjectSchema,
});
