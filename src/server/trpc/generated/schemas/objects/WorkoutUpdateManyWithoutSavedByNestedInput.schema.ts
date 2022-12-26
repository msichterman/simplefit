import { z } from "zod";
import { WorkoutCreateWithoutSavedByInputObjectSchema } from "./WorkoutCreateWithoutSavedByInput.schema";
import { WorkoutUncheckedCreateWithoutSavedByInputObjectSchema } from "./WorkoutUncheckedCreateWithoutSavedByInput.schema";
import { WorkoutCreateOrConnectWithoutSavedByInputObjectSchema } from "./WorkoutCreateOrConnectWithoutSavedByInput.schema";
import { WorkoutUpsertWithWhereUniqueWithoutSavedByInputObjectSchema } from "./WorkoutUpsertWithWhereUniqueWithoutSavedByInput.schema";
import { WorkoutWhereUniqueInputObjectSchema } from "./WorkoutWhereUniqueInput.schema";
import { WorkoutUpdateWithWhereUniqueWithoutSavedByInputObjectSchema } from "./WorkoutUpdateWithWhereUniqueWithoutSavedByInput.schema";
import { WorkoutUpdateManyWithWhereWithoutSavedByInputObjectSchema } from "./WorkoutUpdateManyWithWhereWithoutSavedByInput.schema";
import { WorkoutScalarWhereInputObjectSchema } from "./WorkoutScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutUpdateManyWithoutSavedByNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => WorkoutCreateWithoutSavedByInputObjectSchema),
        z.lazy(() => WorkoutCreateWithoutSavedByInputObjectSchema).array(),
        z.lazy(() => WorkoutUncheckedCreateWithoutSavedByInputObjectSchema),
        z
          .lazy(() => WorkoutUncheckedCreateWithoutSavedByInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => WorkoutCreateOrConnectWithoutSavedByInputObjectSchema),
        z
          .lazy(() => WorkoutCreateOrConnectWithoutSavedByInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => WorkoutUpsertWithWhereUniqueWithoutSavedByInputObjectSchema
        ),
        z
          .lazy(
            () => WorkoutUpsertWithWhereUniqueWithoutSavedByInputObjectSchema
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
          () => WorkoutUpdateWithWhereUniqueWithoutSavedByInputObjectSchema
        ),
        z
          .lazy(
            () => WorkoutUpdateWithWhereUniqueWithoutSavedByInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => WorkoutUpdateManyWithWhereWithoutSavedByInputObjectSchema),
        z
          .lazy(() => WorkoutUpdateManyWithWhereWithoutSavedByInputObjectSchema)
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

export const WorkoutUpdateManyWithoutSavedByNestedInputObjectSchema = Schema;
