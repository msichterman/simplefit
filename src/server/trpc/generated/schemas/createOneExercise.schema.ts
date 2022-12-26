import { z } from "zod";
import { ExerciseCreateInputObjectSchema } from "./objects/ExerciseCreateInput.schema";
import { ExerciseUncheckedCreateInputObjectSchema } from "./objects/ExerciseUncheckedCreateInput.schema";

export const ExerciseCreateOneSchema = z.object({
  data: z.union([
    ExerciseCreateInputObjectSchema,
    ExerciseUncheckedCreateInputObjectSchema,
  ]),
});
