import { z } from "zod";
import { ExerciseCreateManyInputObjectSchema } from "./objects/ExerciseCreateManyInput.schema";

export const ExerciseCreateManySchema = z.object({
  data: ExerciseCreateManyInputObjectSchema,
});
