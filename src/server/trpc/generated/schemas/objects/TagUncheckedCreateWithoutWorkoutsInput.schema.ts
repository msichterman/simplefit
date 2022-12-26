import { z } from "zod";
import { ExerciseUncheckedCreateNestedManyWithoutTagsInputObjectSchema } from "./ExerciseUncheckedCreateNestedManyWithoutTagsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TagUncheckedCreateWithoutWorkoutsInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    exercises: z
      .lazy(() => ExerciseUncheckedCreateNestedManyWithoutTagsInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagUncheckedCreateWithoutWorkoutsInputObjectSchema = Schema;
