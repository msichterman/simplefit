import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { WorkoutUpdateManyWithoutTagsNestedInputObjectSchema } from "./WorkoutUpdateManyWithoutTagsNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TagUpdateWithoutExercisesInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    workouts: z
      .lazy(() => WorkoutUpdateManyWithoutTagsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagUpdateWithoutExercisesInputObjectSchema = Schema;
