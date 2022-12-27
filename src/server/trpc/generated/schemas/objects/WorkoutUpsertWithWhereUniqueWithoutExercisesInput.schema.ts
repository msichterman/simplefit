import { z } from "zod";
import { WorkoutWhereUniqueInputObjectSchema } from "./WorkoutWhereUniqueInput.schema";
import { WorkoutUpdateWithoutExercisesInputObjectSchema } from "./WorkoutUpdateWithoutExercisesInput.schema";
import { WorkoutUncheckedUpdateWithoutExercisesInputObjectSchema } from "./WorkoutUncheckedUpdateWithoutExercisesInput.schema";
import { WorkoutCreateWithoutExercisesInputObjectSchema } from "./WorkoutCreateWithoutExercisesInput.schema";
import { WorkoutUncheckedCreateWithoutExercisesInputObjectSchema } from "./WorkoutUncheckedCreateWithoutExercisesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutUpsertWithWhereUniqueWithoutExercisesInput> =
  z
    .object({
      where: z.lazy(() => WorkoutWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => WorkoutUpdateWithoutExercisesInputObjectSchema),
        z.lazy(() => WorkoutUncheckedUpdateWithoutExercisesInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => WorkoutCreateWithoutExercisesInputObjectSchema),
        z.lazy(() => WorkoutUncheckedCreateWithoutExercisesInputObjectSchema),
      ]),
    })
    .strict();

export const WorkoutUpsertWithWhereUniqueWithoutExercisesInputObjectSchema =
  Schema;
