import { z } from "zod";
import { ExerciseWhereUniqueInputObjectSchema } from "./objects/ExerciseWhereUniqueInput.schema";

export const ExerciseFindUniqueSchema = z.object({
  where: ExerciseWhereUniqueInputObjectSchema,
});
