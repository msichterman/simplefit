import { z } from "zod";
import { ExerciseCreateWithoutTagsInputObjectSchema } from "./ExerciseCreateWithoutTagsInput.schema";
import { ExerciseUncheckedCreateWithoutTagsInputObjectSchema } from "./ExerciseUncheckedCreateWithoutTagsInput.schema";
import { ExerciseCreateOrConnectWithoutTagsInputObjectSchema } from "./ExerciseCreateOrConnectWithoutTagsInput.schema";
import { ExerciseUpsertWithWhereUniqueWithoutTagsInputObjectSchema } from "./ExerciseUpsertWithWhereUniqueWithoutTagsInput.schema";
import { ExerciseWhereUniqueInputObjectSchema } from "./ExerciseWhereUniqueInput.schema";
import { ExerciseUpdateWithWhereUniqueWithoutTagsInputObjectSchema } from "./ExerciseUpdateWithWhereUniqueWithoutTagsInput.schema";
import { ExerciseUpdateManyWithWhereWithoutTagsInputObjectSchema } from "./ExerciseUpdateManyWithWhereWithoutTagsInput.schema";
import { ExerciseScalarWhereInputObjectSchema } from "./ExerciseScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExerciseUncheckedUpdateManyWithoutTagsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ExerciseCreateWithoutTagsInputObjectSchema),
          z.lazy(() => ExerciseCreateWithoutTagsInputObjectSchema).array(),
          z.lazy(() => ExerciseUncheckedCreateWithoutTagsInputObjectSchema),
          z
            .lazy(() => ExerciseUncheckedCreateWithoutTagsInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ExerciseCreateOrConnectWithoutTagsInputObjectSchema),
          z
            .lazy(() => ExerciseCreateOrConnectWithoutTagsInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => ExerciseUpsertWithWhereUniqueWithoutTagsInputObjectSchema
          ),
          z
            .lazy(
              () => ExerciseUpsertWithWhereUniqueWithoutTagsInputObjectSchema
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
            () => ExerciseUpdateWithWhereUniqueWithoutTagsInputObjectSchema
          ),
          z
            .lazy(
              () => ExerciseUpdateWithWhereUniqueWithoutTagsInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => ExerciseUpdateManyWithWhereWithoutTagsInputObjectSchema),
          z
            .lazy(() => ExerciseUpdateManyWithWhereWithoutTagsInputObjectSchema)
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

export const ExerciseUncheckedUpdateManyWithoutTagsNestedInputObjectSchema =
  Schema;
