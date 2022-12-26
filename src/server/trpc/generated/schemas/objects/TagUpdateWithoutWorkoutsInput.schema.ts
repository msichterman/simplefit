import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { ExerciseUpdateManyWithoutTagsNestedInputObjectSchema } from "./ExerciseUpdateManyWithoutTagsNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TagUpdateWithoutWorkoutsInput> = z
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
  })
  .strict();

export const TagUpdateWithoutWorkoutsInputObjectSchema = Schema;
