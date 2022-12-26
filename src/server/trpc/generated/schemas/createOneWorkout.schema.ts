import { z } from "zod";
import { WorkoutCreateInputObjectSchema } from "./objects/WorkoutCreateInput.schema";
import { WorkoutUncheckedCreateInputObjectSchema } from "./objects/WorkoutUncheckedCreateInput.schema";

export const WorkoutCreateOneSchema = z.object({
  data: z.union([
    WorkoutCreateInputObjectSchema,
    WorkoutUncheckedCreateInputObjectSchema,
  ]),
});
