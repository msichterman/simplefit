import { z } from "zod";
import { WorkoutUncheckedCreateNestedManyWithoutTagsInputObjectSchema } from "./WorkoutUncheckedCreateNestedManyWithoutTagsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TagUncheckedCreateWithoutExercisesInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    workouts: z
      .lazy(() => WorkoutUncheckedCreateNestedManyWithoutTagsInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagUncheckedCreateWithoutExercisesInputObjectSchema = Schema;
