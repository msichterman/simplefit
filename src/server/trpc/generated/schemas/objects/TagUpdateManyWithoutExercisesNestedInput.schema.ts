import { z } from "zod";
import { TagCreateWithoutExercisesInputObjectSchema } from "./TagCreateWithoutExercisesInput.schema";
import { TagUncheckedCreateWithoutExercisesInputObjectSchema } from "./TagUncheckedCreateWithoutExercisesInput.schema";
import { TagCreateOrConnectWithoutExercisesInputObjectSchema } from "./TagCreateOrConnectWithoutExercisesInput.schema";
import { TagUpsertWithWhereUniqueWithoutExercisesInputObjectSchema } from "./TagUpsertWithWhereUniqueWithoutExercisesInput.schema";
import { TagWhereUniqueInputObjectSchema } from "./TagWhereUniqueInput.schema";
import { TagUpdateWithWhereUniqueWithoutExercisesInputObjectSchema } from "./TagUpdateWithWhereUniqueWithoutExercisesInput.schema";
import { TagUpdateManyWithWhereWithoutExercisesInputObjectSchema } from "./TagUpdateManyWithWhereWithoutExercisesInput.schema";
import { TagScalarWhereInputObjectSchema } from "./TagScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TagUpdateManyWithoutExercisesNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => TagCreateWithoutExercisesInputObjectSchema),
        z.lazy(() => TagCreateWithoutExercisesInputObjectSchema).array(),
        z.lazy(() => TagUncheckedCreateWithoutExercisesInputObjectSchema),
        z
          .lazy(() => TagUncheckedCreateWithoutExercisesInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => TagCreateOrConnectWithoutExercisesInputObjectSchema),
        z
          .lazy(() => TagCreateOrConnectWithoutExercisesInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => TagUpsertWithWhereUniqueWithoutExercisesInputObjectSchema),
        z
          .lazy(() => TagUpsertWithWhereUniqueWithoutExercisesInputObjectSchema)
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
        z.lazy(() => TagUpdateWithWhereUniqueWithoutExercisesInputObjectSchema),
        z
          .lazy(() => TagUpdateWithWhereUniqueWithoutExercisesInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => TagUpdateManyWithWhereWithoutExercisesInputObjectSchema),
        z
          .lazy(() => TagUpdateManyWithWhereWithoutExercisesInputObjectSchema)
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

export const TagUpdateManyWithoutExercisesNestedInputObjectSchema = Schema;
