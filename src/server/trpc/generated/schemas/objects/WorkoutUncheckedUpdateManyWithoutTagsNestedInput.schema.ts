import { z } from "zod";
import { WorkoutCreateWithoutTagsInputObjectSchema } from "./WorkoutCreateWithoutTagsInput.schema";
import { WorkoutUncheckedCreateWithoutTagsInputObjectSchema } from "./WorkoutUncheckedCreateWithoutTagsInput.schema";
import { WorkoutCreateOrConnectWithoutTagsInputObjectSchema } from "./WorkoutCreateOrConnectWithoutTagsInput.schema";
import { WorkoutUpsertWithWhereUniqueWithoutTagsInputObjectSchema } from "./WorkoutUpsertWithWhereUniqueWithoutTagsInput.schema";
import { WorkoutWhereUniqueInputObjectSchema } from "./WorkoutWhereUniqueInput.schema";
import { WorkoutUpdateWithWhereUniqueWithoutTagsInputObjectSchema } from "./WorkoutUpdateWithWhereUniqueWithoutTagsInput.schema";
import { WorkoutUpdateManyWithWhereWithoutTagsInputObjectSchema } from "./WorkoutUpdateManyWithWhereWithoutTagsInput.schema";
import { WorkoutScalarWhereInputObjectSchema } from "./WorkoutScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutUncheckedUpdateManyWithoutTagsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => WorkoutCreateWithoutTagsInputObjectSchema),
          z.lazy(() => WorkoutCreateWithoutTagsInputObjectSchema).array(),
          z.lazy(() => WorkoutUncheckedCreateWithoutTagsInputObjectSchema),
          z
            .lazy(() => WorkoutUncheckedCreateWithoutTagsInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => WorkoutCreateOrConnectWithoutTagsInputObjectSchema),
          z
            .lazy(() => WorkoutCreateOrConnectWithoutTagsInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => WorkoutUpsertWithWhereUniqueWithoutTagsInputObjectSchema
          ),
          z
            .lazy(
              () => WorkoutUpsertWithWhereUniqueWithoutTagsInputObjectSchema
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
            () => WorkoutUpdateWithWhereUniqueWithoutTagsInputObjectSchema
          ),
          z
            .lazy(
              () => WorkoutUpdateWithWhereUniqueWithoutTagsInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => WorkoutUpdateManyWithWhereWithoutTagsInputObjectSchema),
          z
            .lazy(() => WorkoutUpdateManyWithWhereWithoutTagsInputObjectSchema)
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

export const WorkoutUncheckedUpdateManyWithoutTagsNestedInputObjectSchema =
  Schema;
