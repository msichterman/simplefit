import { z } from "zod";
import { ExerciseCreateNestedManyWithoutTagsInputObjectSchema } from "./ExerciseCreateNestedManyWithoutTagsInput.schema";
import { WorkoutCreateNestedManyWithoutTagsInputObjectSchema } from "./WorkoutCreateNestedManyWithoutTagsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TagCreateInput> = z
  .object({
    name: z.string(),
    exercises: z
      .lazy(() => ExerciseCreateNestedManyWithoutTagsInputObjectSchema)
      .optional(),
    workouts: z
      .lazy(() => WorkoutCreateNestedManyWithoutTagsInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagCreateInputObjectSchema = Schema;
