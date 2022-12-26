import { z } from "zod";
import { TagWhereUniqueInputObjectSchema } from "./TagWhereUniqueInput.schema";
import { TagUpdateWithoutExercisesInputObjectSchema } from "./TagUpdateWithoutExercisesInput.schema";
import { TagUncheckedUpdateWithoutExercisesInputObjectSchema } from "./TagUncheckedUpdateWithoutExercisesInput.schema";
import { TagCreateWithoutExercisesInputObjectSchema } from "./TagCreateWithoutExercisesInput.schema";
import { TagUncheckedCreateWithoutExercisesInputObjectSchema } from "./TagUncheckedCreateWithoutExercisesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TagUpsertWithWhereUniqueWithoutExercisesInput> =
  z
    .object({
      where: z.lazy(() => TagWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => TagUpdateWithoutExercisesInputObjectSchema),
        z.lazy(() => TagUncheckedUpdateWithoutExercisesInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => TagCreateWithoutExercisesInputObjectSchema),
        z.lazy(() => TagUncheckedCreateWithoutExercisesInputObjectSchema),
      ]),
    })
    .strict();

export const TagUpsertWithWhereUniqueWithoutExercisesInputObjectSchema = Schema;
