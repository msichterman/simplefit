import { z } from "zod";
import { WorkoutCreateManyInputObjectSchema } from "./objects/WorkoutCreateManyInput.schema";

export const WorkoutCreateManySchema = z.object({
  data: WorkoutCreateManyInputObjectSchema,
});
