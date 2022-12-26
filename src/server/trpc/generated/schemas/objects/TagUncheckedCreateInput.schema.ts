import { z } from "zod";
import { ExerciseUncheckedCreateNestedManyWithoutTagsInputObjectSchema } from "./ExerciseUncheckedCreateNestedManyWithoutTagsInput.schema";
import { WorkoutUncheckedCreateNestedManyWithoutTagsInputObjectSchema } from "./WorkoutUncheckedCreateNestedManyWithoutTagsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TagUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    exercises: z
      .lazy(() => ExerciseUncheckedCreateNestedManyWithoutTagsInputObjectSchema)
      .optional(),
    workouts: z
      .lazy(() => WorkoutUncheckedCreateNestedManyWithoutTagsInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagUncheckedCreateInputObjectSchema = Schema;
