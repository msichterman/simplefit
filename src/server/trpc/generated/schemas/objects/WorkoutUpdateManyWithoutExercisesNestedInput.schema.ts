import { z } from "zod";
import { WorkoutCreateWithoutExercisesInputObjectSchema } from "./WorkoutCreateWithoutExercisesInput.schema";
import { WorkoutUncheckedCreateWithoutExercisesInputObjectSchema } from "./WorkoutUncheckedCreateWithoutExercisesInput.schema";
import { WorkoutCreateOrConnectWithoutExercisesInputObjectSchema } from "./WorkoutCreateOrConnectWithoutExercisesInput.schema";
import { WorkoutUpsertWithWhereUniqueWithoutExercisesInputObjectSchema } from "./WorkoutUpsertWithWhereUniqueWithoutExercisesInput.schema";
import { WorkoutWhereUniqueInputObjectSchema } from "./WorkoutWhereUniqueInput.schema";
import { WorkoutUpdateWithWhereUniqueWithoutExercisesInputObjectSchema } from "./WorkoutUpdateWithWhereUniqueWithoutExercisesInput.schema";
import { WorkoutUpdateManyWithWhereWithoutExercisesInputObjectSchema } from "./WorkoutUpdateManyWithWhereWithoutExercisesInput.schema";
import { WorkoutScalarWhereInputObjectSchema } from "./WorkoutScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutUpdateManyWithoutExercisesNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => WorkoutCreateWithoutExercisesInputObjectSchema),
        z.lazy(() => WorkoutCreateWithoutExercisesInputObjectSchema).array(),
        z.lazy(() => WorkoutUncheckedCreateWithoutExercisesInputObjectSchema),
        z
          .lazy(() => WorkoutUncheckedCreateWithoutExercisesInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => WorkoutCreateOrConnectWithoutExercisesInputObjectSchema),
        z
          .lazy(() => WorkoutCreateOrConnectWithoutExercisesInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => WorkoutUpsertWithWhereUniqueWithoutExercisesInputObjectSchema
        ),
        z
          .lazy(
            () => WorkoutUpsertWithWhereUniqueWithoutExercisesInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => WorkoutWhereUniqueInputObjectSchema),
        z.lazy(() => WorkoutWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => WorkoutWhereUniqueInputObjectSchema),
        z.lazy(() => WorkoutWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => WorkoutWhereUniqueInputObjectSchema),
        z.lazy(() => WorkoutWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => WorkoutWhereUniqueInputObjectSchema),
        z.lazy(() => WorkoutWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => WorkoutUpdateWithWhereUniqueWithoutExercisesInputObjectSchema
        ),
        z
          .lazy(
            () => WorkoutUpdateWithWhereUniqueWithoutExercisesInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => WorkoutUpdateManyWithWhereWithoutExercisesInputObjectSchema
        ),
        z
          .lazy(
            () => WorkoutUpdateManyWithWhereWithoutExercisesInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => WorkoutScalarWhereInputObjectSchema),
        z.lazy(() => WorkoutScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const WorkoutUpdateManyWithoutExercisesNestedInputObjectSchema = Schema;
