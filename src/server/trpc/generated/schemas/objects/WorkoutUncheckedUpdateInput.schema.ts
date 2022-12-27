import { z } from "zod";
import { IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema";
import { TagUncheckedUpdateManyWithoutWorkoutsNestedInputObjectSchema } from "./TagUncheckedUpdateManyWithoutWorkoutsNestedInput.schema";
import { UserUncheckedUpdateManyWithoutSavedWorkoutsNestedInputObjectSchema } from "./UserUncheckedUpdateManyWithoutSavedWorkoutsNestedInput.schema";
import { ExerciseUncheckedUpdateManyWithoutWorkoutsNestedInputObjectSchema } from "./ExerciseUncheckedUpdateManyWithoutWorkoutsNestedInput.schema";
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
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
      .lazy(() => TagUncheckedUpdateManyWithoutWorkoutsNestedInputObjectSchema)
      .optional(),
    authorId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    savedBy: z
      .lazy(
        () => UserUncheckedUpdateManyWithoutSavedWorkoutsNestedInputObjectSchema
      )
      .optional(),
    exercises: z
      .lazy(
        () => ExerciseUncheckedUpdateManyWithoutWorkoutsNestedInputObjectSchema
      )
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

export const WorkoutUncheckedUpdateInputObjectSchema = Schema;
