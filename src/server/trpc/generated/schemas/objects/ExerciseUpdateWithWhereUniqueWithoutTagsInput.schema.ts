import { z } from "zod";
import { ExerciseWhereUniqueInputObjectSchema } from "./ExerciseWhereUniqueInput.schema";
import { ExerciseUpdateWithoutTagsInputObjectSchema } from "./ExerciseUpdateWithoutTagsInput.schema";
import { ExerciseUncheckedUpdateWithoutTagsInputObjectSchema } from "./ExerciseUncheckedUpdateWithoutTagsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExerciseUpdateWithWhereUniqueWithoutTagsInput> =
  z
    .object({
      where: z.lazy(() => ExerciseWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ExerciseUpdateWithoutTagsInputObjectSchema),
        z.lazy(() => ExerciseUncheckedUpdateWithoutTagsInputObjectSchema),
      ]),
    })
    .strict();

export const ExerciseUpdateWithWhereUniqueWithoutTagsInputObjectSchema = Schema;
