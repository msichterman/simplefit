import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { ExerciseUpdateManyWithoutTagsNestedInputObjectSchema } from "./ExerciseUpdateManyWithoutTagsNestedInput.schema";
import { WorkoutUpdateManyWithoutTagsNestedInputObjectSchema } from "./WorkoutUpdateManyWithoutTagsNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TagUpdateInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    exercises: z
      .lazy(() => ExerciseUpdateManyWithoutTagsNestedInputObjectSchema)
      .optional(),
    workouts: z
      .lazy(() => WorkoutUpdateManyWithoutTagsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagUpdateInputObjectSchema = Schema;
