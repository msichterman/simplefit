import { z } from "zod";
import { ExerciseFindManySchema } from "../findManyExercise.schema";
import { WorkoutFindManySchema } from "../findManyWorkout.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TagInclude> = z
  .object({
    exercises: z
      .union([z.boolean(), z.lazy(() => ExerciseFindManySchema)])
      .optional(),
    workouts: z
      .union([z.boolean(), z.lazy(() => WorkoutFindManySchema)])
      .optional(),
    _count: z.boolean().optional(),
  })
  .strict();

export const TagIncludeObjectSchema = Schema;
