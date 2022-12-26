import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { TagUpdateManyWithoutWorkoutsNestedInputObjectSchema } from "./TagUpdateManyWithoutWorkoutsNestedInput.schema";
import { UserUpdateManyWithoutSavedWorkoutsNestedInputObjectSchema } from "./UserUpdateManyWithoutSavedWorkoutsNestedInput.schema";
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutUpdateWithoutAuthorInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    tags: z
      .lazy(() => TagUpdateManyWithoutWorkoutsNestedInputObjectSchema)
      .optional(),
    savedBy: z
      .lazy(() => UserUpdateManyWithoutSavedWorkoutsNestedInputObjectSchema)
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

export const WorkoutUpdateWithoutAuthorInputObjectSchema = Schema;
