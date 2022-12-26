import { z } from "zod";
import { UserCreateNestedOneWithoutAuthoredWorkoutsInputObjectSchema } from "./UserCreateNestedOneWithoutAuthoredWorkoutsInput.schema";
import { UserCreateNestedManyWithoutSavedWorkoutsInputObjectSchema } from "./UserCreateNestedManyWithoutSavedWorkoutsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutCreateWithoutTagsInput> = z
  .object({
    name: z.string(),
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

export const WorkoutCreateWithoutTagsInputObjectSchema = Schema;
