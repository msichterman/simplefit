import { z } from "zod";
import { IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { TagUncheckedUpdateManyWithoutWorkoutsNestedInputObjectSchema } from "./TagUncheckedUpdateManyWithoutWorkoutsNestedInput.schema";
import { UserUncheckedUpdateManyWithoutSavedWorkoutsNestedInputObjectSchema } from "./UserUncheckedUpdateManyWithoutSavedWorkoutsNestedInput.schema";
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutUncheckedUpdateWithoutAuthorInput> = z
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
    tags: z
      .lazy(() => TagUncheckedUpdateManyWithoutWorkoutsNestedInputObjectSchema)
      .optional(),
    savedBy: z
      .lazy(
        () => UserUncheckedUpdateManyWithoutSavedWorkoutsNestedInputObjectSchema
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

export const WorkoutUncheckedUpdateWithoutAuthorInputObjectSchema = Schema;
