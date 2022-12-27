import { z } from "zod";
import { TagFindManySchema } from "../findManyTag.schema";
import { WorkoutFindManySchema } from "../findManyWorkout.schema";
import { ExerciseCountOutputTypeArgsObjectSchema } from "./ExerciseCountOutputTypeArgs.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExerciseSelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    difficulty: z.boolean().optional(),
    sets: z.boolean().optional(),
    reps: z.boolean().optional(),
    rest: z.boolean().optional(),
    tags: z.union([z.boolean(), z.lazy(() => TagFindManySchema)]).optional(),
    exampleLink: z.boolean().optional(),
    workouts: z
      .union([z.boolean(), z.lazy(() => WorkoutFindManySchema)])
      .optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => ExerciseCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ExerciseSelectObjectSchema = Schema;
