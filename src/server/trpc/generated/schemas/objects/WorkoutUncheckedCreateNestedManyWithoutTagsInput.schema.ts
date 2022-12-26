import { z } from "zod";
import { WorkoutCreateWithoutTagsInputObjectSchema } from "./WorkoutCreateWithoutTagsInput.schema";
import { WorkoutUncheckedCreateWithoutTagsInputObjectSchema } from "./WorkoutUncheckedCreateWithoutTagsInput.schema";
import { WorkoutCreateOrConnectWithoutTagsInputObjectSchema } from "./WorkoutCreateOrConnectWithoutTagsInput.schema";
import { WorkoutWhereUniqueInputObjectSchema } from "./WorkoutWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutUncheckedCreateNestedManyWithoutTagsInput> =
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
      connect: z
        .union([
          z.lazy(() => WorkoutWhereUniqueInputObjectSchema),
          z.lazy(() => WorkoutWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const WorkoutUncheckedCreateNestedManyWithoutTagsInputObjectSchema =
  Schema;
