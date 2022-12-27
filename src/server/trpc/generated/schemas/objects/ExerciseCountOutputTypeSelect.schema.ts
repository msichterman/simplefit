import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExerciseCountOutputTypeSelect> = z
  .object({
    tags: z.boolean().optional(),
    workouts: z.boolean().optional(),
  })
  .strict();

export const ExerciseCountOutputTypeSelectObjectSchema = Schema;
