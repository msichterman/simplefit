import { z } from "zod";
import { ExerciseFindManySchema } from "../findManyExercise.schema";
import { WorkoutFindManySchema } from "../findManyWorkout.schema";
import { TagCountOutputTypeArgsObjectSchema } from "./TagCountOutputTypeArgs.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TagSelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    exercises: z
      .union([z.boolean(), z.lazy(() => ExerciseFindManySchema)])
      .optional(),
    workouts: z
      .union([z.boolean(), z.lazy(() => WorkoutFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => TagCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const TagSelectObjectSchema = Schema;
