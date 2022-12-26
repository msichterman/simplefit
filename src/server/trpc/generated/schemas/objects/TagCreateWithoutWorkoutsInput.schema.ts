import { z } from "zod";
import { ExerciseCreateNestedManyWithoutTagsInputObjectSchema } from "./ExerciseCreateNestedManyWithoutTagsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TagCreateWithoutWorkoutsInput> = z
  .object({
    name: z.string(),
    exercises: z
      .lazy(() => ExerciseCreateNestedManyWithoutTagsInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagCreateWithoutWorkoutsInputObjectSchema = Schema;
