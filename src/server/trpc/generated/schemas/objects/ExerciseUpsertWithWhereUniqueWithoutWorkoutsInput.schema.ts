import { z } from "zod";
import { ExerciseWhereUniqueInputObjectSchema } from "./ExerciseWhereUniqueInput.schema";
import { ExerciseUpdateWithoutWorkoutsInputObjectSchema } from "./ExerciseUpdateWithoutWorkoutsInput.schema";
import { ExerciseUncheckedUpdateWithoutWorkoutsInputObjectSchema } from "./ExerciseUncheckedUpdateWithoutWorkoutsInput.schema";
import { ExerciseCreateWithoutWorkoutsInputObjectSchema } from "./ExerciseCreateWithoutWorkoutsInput.schema";
import { ExerciseUncheckedCreateWithoutWorkoutsInputObjectSchema } from "./ExerciseUncheckedCreateWithoutWorkoutsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExerciseUpsertWithWhereUniqueWithoutWorkoutsInput> =
  z
    .object({
      where: z.lazy(() => ExerciseWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ExerciseUpdateWithoutWorkoutsInputObjectSchema),
        z.lazy(() => ExerciseUncheckedUpdateWithoutWorkoutsInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ExerciseCreateWithoutWorkoutsInputObjectSchema),
        z.lazy(() => ExerciseUncheckedCreateWithoutWorkoutsInputObjectSchema),
      ]),
    })
    .strict();

export const ExerciseUpsertWithWhereUniqueWithoutWorkoutsInputObjectSchema =
  Schema;
