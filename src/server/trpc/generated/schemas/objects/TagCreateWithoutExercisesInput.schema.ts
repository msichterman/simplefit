import { z } from "zod";
import { WorkoutCreateNestedManyWithoutTagsInputObjectSchema } from "./WorkoutCreateNestedManyWithoutTagsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TagCreateWithoutExercisesInput> = z
  .object({
    name: z.string(),
    workouts: z
      .lazy(() => WorkoutCreateNestedManyWithoutTagsInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagCreateWithoutExercisesInputObjectSchema = Schema;
