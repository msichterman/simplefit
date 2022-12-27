import { z } from "zod";
import { TagFindManySchema } from "../findManyTag.schema";
import { WorkoutFindManySchema } from "../findManyWorkout.schema";
import { ExerciseCountOutputTypeArgsObjectSchema } from "./ExerciseCountOutputTypeArgs.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExerciseInclude> = z
  .object({
    tags: z.union([z.boolean(), z.lazy(() => TagFindManySchema)]).optional(),
    workouts: z
      .union([z.boolean(), z.lazy(() => WorkoutFindManySchema)])
      .optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => ExerciseCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ExerciseIncludeObjectSchema = Schema;
