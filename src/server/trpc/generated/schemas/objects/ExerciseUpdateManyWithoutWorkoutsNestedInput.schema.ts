import { z } from "zod";
import { ExerciseCreateWithoutWorkoutsInputObjectSchema } from "./ExerciseCreateWithoutWorkoutsInput.schema";
import { ExerciseUncheckedCreateWithoutWorkoutsInputObjectSchema } from "./ExerciseUncheckedCreateWithoutWorkoutsInput.schema";
import { ExerciseCreateOrConnectWithoutWorkoutsInputObjectSchema } from "./ExerciseCreateOrConnectWithoutWorkoutsInput.schema";
import { ExerciseUpsertWithWhereUniqueWithoutWorkoutsInputObjectSchema } from "./ExerciseUpsertWithWhereUniqueWithoutWorkoutsInput.schema";
import { ExerciseWhereUniqueInputObjectSchema } from "./ExerciseWhereUniqueInput.schema";
import { ExerciseUpdateWithWhereUniqueWithoutWorkoutsInputObjectSchema } from "./ExerciseUpdateWithWhereUniqueWithoutWorkoutsInput.schema";
import { ExerciseUpdateManyWithWhereWithoutWorkoutsInputObjectSchema } from "./ExerciseUpdateManyWithWhereWithoutWorkoutsInput.schema";
import { ExerciseScalarWhereInputObjectSchema } from "./ExerciseScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExerciseUpdateManyWithoutWorkoutsNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(
          () => ExerciseUpsertWithWhereUniqueWithoutWorkoutsInputObjectSchema
        ),
        z
          .lazy(
            () => ExerciseUpsertWithWhereUniqueWithoutWorkoutsInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => ExerciseWhereUniqueInputObjectSchema),
        z.lazy(() => ExerciseWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ExerciseWhereUniqueInputObjectSchema),
        z.lazy(() => ExerciseWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ExerciseWhereUniqueInputObjectSchema),
        z.lazy(() => ExerciseWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ExerciseWhereUniqueInputObjectSchema),
        z.lazy(() => ExerciseWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => ExerciseUpdateWithWhereUniqueWithoutWorkoutsInputObjectSchema
        ),
        z
          .lazy(
            () => ExerciseUpdateWithWhereUniqueWithoutWorkoutsInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => ExerciseUpdateManyWithWhereWithoutWorkoutsInputObjectSchema
        ),
        z
          .lazy(
            () => ExerciseUpdateManyWithWhereWithoutWorkoutsInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ExerciseScalarWhereInputObjectSchema),
        z.lazy(() => ExerciseScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ExerciseUpdateManyWithoutWorkoutsNestedInputObjectSchema = Schema;
