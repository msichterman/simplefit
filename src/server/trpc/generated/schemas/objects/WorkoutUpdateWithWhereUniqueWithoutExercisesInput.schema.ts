import { z } from "zod";
import { WorkoutWhereUniqueInputObjectSchema } from "./WorkoutWhereUniqueInput.schema";
import { WorkoutUpdateWithoutExercisesInputObjectSchema } from "./WorkoutUpdateWithoutExercisesInput.schema";
import { WorkoutUncheckedUpdateWithoutExercisesInputObjectSchema } from "./WorkoutUncheckedUpdateWithoutExercisesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutUpdateWithWhereUniqueWithoutExercisesInput> =
  z
    .object({
      where: z.lazy(() => WorkoutWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => WorkoutUpdateWithoutExercisesInputObjectSchema),
        z.lazy(() => WorkoutUncheckedUpdateWithoutExercisesInputObjectSchema),
      ]),
    })
    .strict();

export const WorkoutUpdateWithWhereUniqueWithoutExercisesInputObjectSchema =
  Schema;
