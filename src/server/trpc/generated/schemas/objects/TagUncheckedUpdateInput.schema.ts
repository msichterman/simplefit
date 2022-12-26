import { z } from "zod";
import { IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { ExerciseUncheckedUpdateManyWithoutTagsNestedInputObjectSchema } from "./ExerciseUncheckedUpdateManyWithoutTagsNestedInput.schema";
import { WorkoutUncheckedUpdateManyWithoutTagsNestedInputObjectSchema } from "./WorkoutUncheckedUpdateManyWithoutTagsNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TagUncheckedUpdateInput> = z
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
    exercises: z
      .lazy(() => ExerciseUncheckedUpdateManyWithoutTagsNestedInputObjectSchema)
      .optional(),
    workouts: z
      .lazy(() => WorkoutUncheckedUpdateManyWithoutTagsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagUncheckedUpdateInputObjectSchema = Schema;
