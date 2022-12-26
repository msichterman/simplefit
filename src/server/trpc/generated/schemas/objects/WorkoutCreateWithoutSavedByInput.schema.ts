import { z } from "zod";
import { TagCreateNestedManyWithoutWorkoutsInputObjectSchema } from "./TagCreateNestedManyWithoutWorkoutsInput.schema";
import { UserCreateNestedOneWithoutAuthoredWorkoutsInputObjectSchema } from "./UserCreateNestedOneWithoutAuthoredWorkoutsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutCreateWithoutSavedByInput> = z
  .object({
    name: z.string(),
    tags: z
      .lazy(() => TagCreateNestedManyWithoutWorkoutsInputObjectSchema)
      .optional(),
    author: z
      .lazy(() => UserCreateNestedOneWithoutAuthoredWorkoutsInputObjectSchema)
      .optional(),
    createdAt: z.date().optional().nullable(),
    updatedAt: z.date().optional().nullable(),
  })
  .strict();

export const WorkoutCreateWithoutSavedByInputObjectSchema = Schema;
