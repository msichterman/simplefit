import { z } from "zod";
import { WorkoutCreateWithoutAuthorInputObjectSchema } from "./WorkoutCreateWithoutAuthorInput.schema";
import { WorkoutUncheckedCreateWithoutAuthorInputObjectSchema } from "./WorkoutUncheckedCreateWithoutAuthorInput.schema";
import { WorkoutCreateOrConnectWithoutAuthorInputObjectSchema } from "./WorkoutCreateOrConnectWithoutAuthorInput.schema";
import { WorkoutUpsertWithWhereUniqueWithoutAuthorInputObjectSchema } from "./WorkoutUpsertWithWhereUniqueWithoutAuthorInput.schema";
import { WorkoutCreateManyAuthorInputEnvelopeObjectSchema } from "./WorkoutCreateManyAuthorInputEnvelope.schema";
import { WorkoutWhereUniqueInputObjectSchema } from "./WorkoutWhereUniqueInput.schema";
import { WorkoutUpdateWithWhereUniqueWithoutAuthorInputObjectSchema } from "./WorkoutUpdateWithWhereUniqueWithoutAuthorInput.schema";
import { WorkoutUpdateManyWithWhereWithoutAuthorInputObjectSchema } from "./WorkoutUpdateManyWithWhereWithoutAuthorInput.schema";
import { WorkoutScalarWhereInputObjectSchema } from "./WorkoutScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutUncheckedUpdateManyWithoutAuthorNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => WorkoutCreateWithoutAuthorInputObjectSchema),
          z.lazy(() => WorkoutCreateWithoutAuthorInputObjectSchema).array(),
          z.lazy(() => WorkoutUncheckedCreateWithoutAuthorInputObjectSchema),
          z
            .lazy(() => WorkoutUncheckedCreateWithoutAuthorInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => WorkoutCreateOrConnectWithoutAuthorInputObjectSchema),
          z
            .lazy(() => WorkoutCreateOrConnectWithoutAuthorInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => WorkoutUpsertWithWhereUniqueWithoutAuthorInputObjectSchema
          ),
          z
            .lazy(
              () => WorkoutUpsertWithWhereUniqueWithoutAuthorInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => WorkoutCreateManyAuthorInputEnvelopeObjectSchema)
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
            () => WorkoutUpdateWithWhereUniqueWithoutAuthorInputObjectSchema
          ),
          z
            .lazy(
              () => WorkoutUpdateWithWhereUniqueWithoutAuthorInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => WorkoutUpdateManyWithWhereWithoutAuthorInputObjectSchema
          ),
          z
            .lazy(
              () => WorkoutUpdateManyWithWhereWithoutAuthorInputObjectSchema
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

export const WorkoutUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema =
  Schema;
