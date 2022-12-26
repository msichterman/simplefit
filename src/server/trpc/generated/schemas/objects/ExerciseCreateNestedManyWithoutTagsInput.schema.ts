import { z } from "zod";
import { ExerciseCreateWithoutTagsInputObjectSchema } from "./ExerciseCreateWithoutTagsInput.schema";
import { ExerciseUncheckedCreateWithoutTagsInputObjectSchema } from "./ExerciseUncheckedCreateWithoutTagsInput.schema";
import { ExerciseCreateOrConnectWithoutTagsInputObjectSchema } from "./ExerciseCreateOrConnectWithoutTagsInput.schema";
import { ExerciseWhereUniqueInputObjectSchema } from "./ExerciseWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExerciseCreateNestedManyWithoutTagsInput> = z
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
    connect: z
      .union([
        z.lazy(() => ExerciseWhereUniqueInputObjectSchema),
        z.lazy(() => ExerciseWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ExerciseCreateNestedManyWithoutTagsInputObjectSchema = Schema;
