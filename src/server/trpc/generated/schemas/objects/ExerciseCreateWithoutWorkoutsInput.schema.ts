import { z } from "zod";
import { TagCreateNestedManyWithoutExercisesInputObjectSchema } from "./TagCreateNestedManyWithoutExercisesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExerciseCreateWithoutWorkoutsInput> = z
  .object({
    name: z.string(),
    difficulty: z.string(),
    sets: z.number().optional(),
    reps: z.string(),
    rest: z.string(),
    tags: z
      .lazy(() => TagCreateNestedManyWithoutExercisesInputObjectSchema)
      .optional(),
    exampleLink: z.string(),
    createdAt: z.date().optional().nullable(),
    updatedAt: z.date().optional().nullable(),
  })
  .strict();

export const ExerciseCreateWithoutWorkoutsInputObjectSchema = Schema;
