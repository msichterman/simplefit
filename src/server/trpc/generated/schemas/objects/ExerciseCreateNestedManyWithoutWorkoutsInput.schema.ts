import { z } from "zod";
import { ExerciseCreateWithoutWorkoutsInputObjectSchema } from "./ExerciseCreateWithoutWorkoutsInput.schema";
import { ExerciseUncheckedCreateWithoutWorkoutsInputObjectSchema } from "./ExerciseUncheckedCreateWithoutWorkoutsInput.schema";
import { ExerciseCreateOrConnectWithoutWorkoutsInputObjectSchema } from "./ExerciseCreateOrConnectWithoutWorkoutsInput.schema";
import { ExerciseWhereUniqueInputObjectSchema } from "./ExerciseWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExerciseCreateNestedManyWithoutWorkoutsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ExerciseCreateWithoutWorkoutsInputObjectSchema),
        z.lazy(() => ExerciseCreateWithoutWorkoutsInputObjectSchema).array(),
        z.lazy(() => ExerciseUncheckedCreateWithoutWorkoutsInputObjectSchema),
        z
          .lazy(() => ExerciseUncheckedCreateWithoutWorkoutsInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ExerciseCreateOrConnectWithoutWorkoutsInputObjectSchema),
        z
          .lazy(() => ExerciseCreateOrConnectWithoutWorkoutsInputObjectSchema)
          .array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ExerciseWhereUniqueInputObjectSchema),
        z.lazy(() => ExerciseWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ExerciseCreateNestedManyWithoutWorkoutsInputObjectSchema = Schema;
