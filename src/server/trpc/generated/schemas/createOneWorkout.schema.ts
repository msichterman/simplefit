import { z } from "zod";
import { WorkoutIncludeObjectSchema } from "./objects/WorkoutInclude.schema";
import { WorkoutCreateInputObjectSchema } from "./objects/WorkoutCreateInput.schema";
import { WorkoutUncheckedCreateInputObjectSchema } from "./objects/WorkoutUncheckedCreateInput.schema";

export const WorkoutCreateOneSchema = z.object({
  include: WorkoutIncludeObjectSchema.optional(),
  data: z.union([
    WorkoutCreateInputObjectSchema,
    WorkoutUncheckedCreateInputObjectSchema,
  ]),
});
