import { z } from "zod";
import { TagUncheckedCreateNestedManyWithoutExercisesInputObjectSchema } from "./TagUncheckedCreateNestedManyWithoutExercisesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExerciseUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    difficulty: z.string(),
    sets: z.number().optional(),
    reps: z.string(),
    rest: z.string(),
    tags: z
      .lazy(() => TagUncheckedCreateNestedManyWithoutExercisesInputObjectSchema)
      .optional(),
    exampleLink: z.string(),
    createdAt: z.date().optional().nullable(),
    updatedAt: z.date().optional().nullable(),
  })
  .strict();

export const ExerciseUncheckedCreateInputObjectSchema = Schema;
