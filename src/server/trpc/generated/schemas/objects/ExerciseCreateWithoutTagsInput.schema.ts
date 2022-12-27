import { z } from "zod";
import { WorkoutCreateNestedManyWithoutExercisesInputObjectSchema } from "./WorkoutCreateNestedManyWithoutExercisesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExerciseCreateWithoutTagsInput> = z
  .object({
    name: z.string(),
    difficulty: z.string(),
    sets: z.number().optional(),
    reps: z.string(),
    rest: z.string(),
    exampleLink: z.string(),
    workouts: z
      .lazy(() => WorkoutCreateNestedManyWithoutExercisesInputObjectSchema)
      .optional(),
    createdAt: z.date().optional().nullable(),
    updatedAt: z.date().optional().nullable(),
  })
  .strict();

export const ExerciseCreateWithoutTagsInputObjectSchema = Schema;
