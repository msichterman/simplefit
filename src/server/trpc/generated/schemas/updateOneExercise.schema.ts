import { z } from "zod";
import { ExerciseUpdateInputObjectSchema } from "./objects/ExerciseUpdateInput.schema";
import { ExerciseUncheckedUpdateInputObjectSchema } from "./objects/ExerciseUncheckedUpdateInput.schema";
import { ExerciseWhereUniqueInputObjectSchema } from "./objects/ExerciseWhereUniqueInput.schema";

export const ExerciseUpdateOneSchema = z.object({
  data: z.union([
    ExerciseUpdateInputObjectSchema,
    ExerciseUncheckedUpdateInputObjectSchema,
  ]),
  where: ExerciseWhereUniqueInputObjectSchema,
});
