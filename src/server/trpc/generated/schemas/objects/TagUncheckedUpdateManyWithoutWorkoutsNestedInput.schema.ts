import { z } from "zod";
import { TagCreateWithoutWorkoutsInputObjectSchema } from "./TagCreateWithoutWorkoutsInput.schema";
import { TagUncheckedCreateWithoutWorkoutsInputObjectSchema } from "./TagUncheckedCreateWithoutWorkoutsInput.schema";
import { TagCreateOrConnectWithoutWorkoutsInputObjectSchema } from "./TagCreateOrConnectWithoutWorkoutsInput.schema";
import { TagUpsertWithWhereUniqueWithoutWorkoutsInputObjectSchema } from "./TagUpsertWithWhereUniqueWithoutWorkoutsInput.schema";
import { TagWhereUniqueInputObjectSchema } from "./TagWhereUniqueInput.schema";
import { TagUpdateWithWhereUniqueWithoutWorkoutsInputObjectSchema } from "./TagUpdateWithWhereUniqueWithoutWorkoutsInput.schema";
import { TagUpdateManyWithWhereWithoutWorkoutsInputObjectSchema } from "./TagUpdateManyWithWhereWithoutWorkoutsInput.schema";
import { TagScalarWhereInputObjectSchema } from "./TagScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TagUncheckedUpdateManyWithoutWorkoutsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TagCreateWithoutWorkoutsInputObjectSchema),
          z.lazy(() => TagCreateWithoutWorkoutsInputObjectSchema).array(),
          z.lazy(() => TagUncheckedCreateWithoutWorkoutsInputObjectSchema),
          z
            .lazy(() => TagUncheckedCreateWithoutWorkoutsInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => TagCreateOrConnectWithoutWorkoutsInputObjectSchema),
          z
            .lazy(() => TagCreateOrConnectWithoutWorkoutsInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => TagUpsertWithWhereUniqueWithoutWorkoutsInputObjectSchema
          ),
          z
            .lazy(
              () => TagUpsertWithWhereUniqueWithoutWorkoutsInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => TagWhereUniqueInputObjectSchema),
          z.lazy(() => TagWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => TagWhereUniqueInputObjectSchema),
          z.lazy(() => TagWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => TagWhereUniqueInputObjectSchema),
          z.lazy(() => TagWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => TagWhereUniqueInputObjectSchema),
          z.lazy(() => TagWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => TagUpdateWithWhereUniqueWithoutWorkoutsInputObjectSchema
          ),
          z
            .lazy(
              () => TagUpdateWithWhereUniqueWithoutWorkoutsInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => TagUpdateManyWithWhereWithoutWorkoutsInputObjectSchema),
          z
            .lazy(() => TagUpdateManyWithWhereWithoutWorkoutsInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => TagScalarWhereInputObjectSchema),
          z.lazy(() => TagScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TagUncheckedUpdateManyWithoutWorkoutsNestedInputObjectSchema =
  Schema;
