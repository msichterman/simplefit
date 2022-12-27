import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema";
import { TagUpdateManyWithoutWorkoutsNestedInputObjectSchema } from "./TagUpdateManyWithoutWorkoutsNestedInput.schema";
import { UserUpdateOneWithoutAuthoredWorkoutsNestedInputObjectSchema } from "./UserUpdateOneWithoutAuthoredWorkoutsNestedInput.schema";
import { ExerciseUpdateManyWithoutWorkoutsNestedInputObjectSchema } from "./ExerciseUpdateManyWithoutWorkoutsNestedInput.schema";
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutUpdateWithoutSavedByInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    tags: z
      .lazy(() => TagUpdateManyWithoutWorkoutsNestedInputObjectSchema)
      .optional(),
    author: z
      .lazy(() => UserUpdateOneWithoutAuthoredWorkoutsNestedInputObjectSchema)
      .optional(),
    exercises: z
      .lazy(() => ExerciseUpdateManyWithoutWorkoutsNestedInputObjectSchema)
      .optional(),
    createdAt: z
      .union([
        z.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    updatedAt: z
      .union([
        z.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const WorkoutUpdateWithoutSavedByInputObjectSchema = Schema;
