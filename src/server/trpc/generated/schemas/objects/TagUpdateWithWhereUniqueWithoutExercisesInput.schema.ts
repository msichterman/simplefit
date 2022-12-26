import { z } from "zod";
import { TagWhereUniqueInputObjectSchema } from "./TagWhereUniqueInput.schema";
import { TagUpdateWithoutExercisesInputObjectSchema } from "./TagUpdateWithoutExercisesInput.schema";
import { TagUncheckedUpdateWithoutExercisesInputObjectSchema } from "./TagUncheckedUpdateWithoutExercisesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TagUpdateWithWhereUniqueWithoutExercisesInput> =
  z
    .object({
      where: z.lazy(() => TagWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => TagUpdateWithoutExercisesInputObjectSchema),
        z.lazy(() => TagUncheckedUpdateWithoutExercisesInputObjectSchema),
      ]),
    })
    .strict();

export const TagUpdateWithWhereUniqueWithoutExercisesInputObjectSchema = Schema;
