import { z } from "zod";
import { ExerciseWhereUniqueInputObjectSchema } from "./objects/ExerciseWhereUniqueInput.schema";

export const ExerciseDeleteOneSchema = z.object({
  where: ExerciseWhereUniqueInputObjectSchema,
});
