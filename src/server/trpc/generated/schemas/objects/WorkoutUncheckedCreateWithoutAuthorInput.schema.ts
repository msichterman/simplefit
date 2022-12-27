import { z } from "zod";
import { TagUncheckedCreateNestedManyWithoutWorkoutsInputObjectSchema } from "./TagUncheckedCreateNestedManyWithoutWorkoutsInput.schema";
import { UserUncheckedCreateNestedManyWithoutSavedWorkoutsInputObjectSchema } from "./UserUncheckedCreateNestedManyWithoutSavedWorkoutsInput.schema";
import { ExerciseUncheckedCreateNestedManyWithoutWorkoutsInputObjectSchema } from "./ExerciseUncheckedCreateNestedManyWithoutWorkoutsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutUncheckedCreateWithoutAuthorInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    description: z.string().optional().nullable(),
    tags: z
      .lazy(() => TagUncheckedCreateNestedManyWithoutWorkoutsInputObjectSchema)
      .optional(),
    savedBy: z
      .lazy(
        () => UserUncheckedCreateNestedManyWithoutSavedWorkoutsInputObjectSchema
      )
      .optional(),
    exercises: z
      .lazy(
        () => ExerciseUncheckedCreateNestedManyWithoutWorkoutsInputObjectSchema
      )
      .optional(),
    createdAt: z.date().optional().nullable(),
    updatedAt: z.date().optional().nullable(),
  })
  .strict();

export const WorkoutUncheckedCreateWithoutAuthorInputObjectSchema = Schema;
