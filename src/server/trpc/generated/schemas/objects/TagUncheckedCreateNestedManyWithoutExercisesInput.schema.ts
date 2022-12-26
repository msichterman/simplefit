import { z } from "zod";
import { TagCreateWithoutExercisesInputObjectSchema } from "./TagCreateWithoutExercisesInput.schema";
import { TagUncheckedCreateWithoutExercisesInputObjectSchema } from "./TagUncheckedCreateWithoutExercisesInput.schema";
import { TagCreateOrConnectWithoutExercisesInputObjectSchema } from "./TagCreateOrConnectWithoutExercisesInput.schema";
import { TagWhereUniqueInputObjectSchema } from "./TagWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TagUncheckedCreateNestedManyWithoutExercisesInput> =
  z
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
      connect: z
        .union([
          z.lazy(() => TagWhereUniqueInputObjectSchema),
          z.lazy(() => TagWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TagUncheckedCreateNestedManyWithoutExercisesInputObjectSchema =
  Schema;
