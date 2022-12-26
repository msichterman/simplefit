import { z } from "zod";
import { WorkoutCreateWithoutSavedByInputObjectSchema } from "./WorkoutCreateWithoutSavedByInput.schema";
import { WorkoutUncheckedCreateWithoutSavedByInputObjectSchema } from "./WorkoutUncheckedCreateWithoutSavedByInput.schema";
import { WorkoutCreateOrConnectWithoutSavedByInputObjectSchema } from "./WorkoutCreateOrConnectWithoutSavedByInput.schema";
import { WorkoutWhereUniqueInputObjectSchema } from "./WorkoutWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutCreateNestedManyWithoutSavedByInput> = z
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
    connect: z
      .union([
        z.lazy(() => WorkoutWhereUniqueInputObjectSchema),
        z.lazy(() => WorkoutWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const WorkoutCreateNestedManyWithoutSavedByInputObjectSchema = Schema;
