import { z } from "zod";
import { ExerciseWhereUniqueInputObjectSchema } from "./ExerciseWhereUniqueInput.schema";
import { ExerciseCreateWithoutWorkoutsInputObjectSchema } from "./ExerciseCreateWithoutWorkoutsInput.schema";
import { ExerciseUncheckedCreateWithoutWorkoutsInputObjectSchema } from "./ExerciseUncheckedCreateWithoutWorkoutsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExerciseCreateOrConnectWithoutWorkoutsInput> = z
  .object({
    where: z.lazy(() => ExerciseWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ExerciseCreateWithoutWorkoutsInputObjectSchema),
      z.lazy(() => ExerciseUncheckedCreateWithoutWorkoutsInputObjectSchema),
    ]),
  })
  .strict();

export const ExerciseCreateOrConnectWithoutWorkoutsInputObjectSchema = Schema;
