import { z } from "zod";
import { TagCreateNestedManyWithoutExercisesInputObjectSchema } from "./TagCreateNestedManyWithoutExercisesInput.schema";
import { WorkoutCreateNestedManyWithoutExercisesInputObjectSchema } from "./WorkoutCreateNestedManyWithoutExercisesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExerciseCreateInput> = z
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
    workouts: z
      .lazy(() => WorkoutCreateNestedManyWithoutExercisesInputObjectSchema)
      .optional(),
    createdAt: z.date().optional().nullable(),
    updatedAt: z.date().optional().nullable(),
  })
  .strict();

export const ExerciseCreateInputObjectSchema = Schema;
