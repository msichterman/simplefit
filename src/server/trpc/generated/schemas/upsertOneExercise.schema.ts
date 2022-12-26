import { z } from "zod";
import { ExerciseWhereUniqueInputObjectSchema } from "./objects/ExerciseWhereUniqueInput.schema";
import { ExerciseCreateInputObjectSchema } from "./objects/ExerciseCreateInput.schema";
import { ExerciseUncheckedCreateInputObjectSchema } from "./objects/ExerciseUncheckedCreateInput.schema";
import { ExerciseUpdateInputObjectSchema } from "./objects/ExerciseUpdateInput.schema";
import { ExerciseUncheckedUpdateInputObjectSchema } from "./objects/ExerciseUncheckedUpdateInput.schema";

export const ExerciseUpsertSchema = z.object({
  where: ExerciseWhereUniqueInputObjectSchema,
  create: z.union([
    ExerciseCreateInputObjectSchema,
    ExerciseUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ExerciseUpdateInputObjectSchema,
    ExerciseUncheckedUpdateInputObjectSchema,
  ]),
});
