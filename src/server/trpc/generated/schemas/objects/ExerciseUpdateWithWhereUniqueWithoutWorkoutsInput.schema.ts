import { z } from "zod";
import { ExerciseWhereUniqueInputObjectSchema } from "./ExerciseWhereUniqueInput.schema";
import { ExerciseUpdateWithoutWorkoutsInputObjectSchema } from "./ExerciseUpdateWithoutWorkoutsInput.schema";
import { ExerciseUncheckedUpdateWithoutWorkoutsInputObjectSchema } from "./ExerciseUncheckedUpdateWithoutWorkoutsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExerciseUpdateWithWhereUniqueWithoutWorkoutsInput> =
  z
    .object({
      where: z.lazy(() => ExerciseWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ExerciseUpdateWithoutWorkoutsInputObjectSchema),
        z.lazy(() => ExerciseUncheckedUpdateWithoutWorkoutsInputObjectSchema),
      ]),
    })
    .strict();

export const ExerciseUpdateWithWhereUniqueWithoutWorkoutsInputObjectSchema =
  Schema;
