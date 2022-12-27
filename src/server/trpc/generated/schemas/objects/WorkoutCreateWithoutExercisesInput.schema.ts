import { z } from "zod";
import { TagCreateNestedManyWithoutWorkoutsInputObjectSchema } from "./TagCreateNestedManyWithoutWorkoutsInput.schema";
import { UserCreateNestedOneWithoutAuthoredWorkoutsInputObjectSchema } from "./UserCreateNestedOneWithoutAuthoredWorkoutsInput.schema";
import { UserCreateNestedManyWithoutSavedWorkoutsInputObjectSchema } from "./UserCreateNestedManyWithoutSavedWorkoutsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutCreateWithoutExercisesInput> = z
  .object({
    name: z.string(),
    description: z.string().optional().nullable(),
    tags: z
      .lazy(() => TagCreateNestedManyWithoutWorkoutsInputObjectSchema)
      .optional(),
    author: z
      .lazy(() => UserCreateNestedOneWithoutAuthoredWorkoutsInputObjectSchema)
      .optional(),
    savedBy: z
      .lazy(() => UserCreateNestedManyWithoutSavedWorkoutsInputObjectSchema)
      .optional(),
    createdAt: z.date().optional().nullable(),
    updatedAt: z.date().optional().nullable(),
  })
  .strict();

export const WorkoutCreateWithoutExercisesInputObjectSchema = Schema;
