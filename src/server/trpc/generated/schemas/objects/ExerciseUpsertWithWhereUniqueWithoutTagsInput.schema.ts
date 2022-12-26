import { z } from "zod";
import { ExerciseWhereUniqueInputObjectSchema } from "./ExerciseWhereUniqueInput.schema";
import { ExerciseUpdateWithoutTagsInputObjectSchema } from "./ExerciseUpdateWithoutTagsInput.schema";
import { ExerciseUncheckedUpdateWithoutTagsInputObjectSchema } from "./ExerciseUncheckedUpdateWithoutTagsInput.schema";
import { ExerciseCreateWithoutTagsInputObjectSchema } from "./ExerciseCreateWithoutTagsInput.schema";
import { ExerciseUncheckedCreateWithoutTagsInputObjectSchema } from "./ExerciseUncheckedCreateWithoutTagsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExerciseUpsertWithWhereUniqueWithoutTagsInput> =
  z
    .object({
      where: z.lazy(() => ExerciseWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ExerciseUpdateWithoutTagsInputObjectSchema),
        z.lazy(() => ExerciseUncheckedUpdateWithoutTagsInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ExerciseCreateWithoutTagsInputObjectSchema),
        z.lazy(() => ExerciseUncheckedCreateWithoutTagsInputObjectSchema),
      ]),
    })
    .strict();

export const ExerciseUpsertWithWhereUniqueWithoutTagsInputObjectSchema = Schema;
