import { z } from "zod";
import { WorkoutUncheckedCreateNestedManyWithoutExercisesInputObjectSchema } from "./WorkoutUncheckedCreateNestedManyWithoutExercisesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExerciseUncheckedCreateWithoutTagsInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    difficulty: z.string(),
    sets: z.number().optional(),
    reps: z.string(),
    rest: z.string(),
    exampleLink: z.string(),
    workouts: z
      .lazy(
        () => WorkoutUncheckedCreateNestedManyWithoutExercisesInputObjectSchema
      )
      .optional(),
    createdAt: z.date().optional().nullable(),
    updatedAt: z.date().optional().nullable(),
  })
  .strict();

export const ExerciseUncheckedCreateWithoutTagsInputObjectSchema = Schema;
