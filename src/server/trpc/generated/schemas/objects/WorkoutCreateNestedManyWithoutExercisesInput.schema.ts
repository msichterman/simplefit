import { z } from "zod";
import { WorkoutCreateWithoutExercisesInputObjectSchema } from "./WorkoutCreateWithoutExercisesInput.schema";
import { WorkoutUncheckedCreateWithoutExercisesInputObjectSchema } from "./WorkoutUncheckedCreateWithoutExercisesInput.schema";
import { WorkoutCreateOrConnectWithoutExercisesInputObjectSchema } from "./WorkoutCreateOrConnectWithoutExercisesInput.schema";
import { WorkoutWhereUniqueInputObjectSchema } from "./WorkoutWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutCreateNestedManyWithoutExercisesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => WorkoutCreateWithoutExercisesInputObjectSchema),
        z.lazy(() => WorkoutCreateWithoutExercisesInputObjectSchema).array(),
        z.lazy(() => WorkoutUncheckedCreateWithoutExercisesInputObjectSchema),
        z
          .lazy(() => WorkoutUncheckedCreateWithoutExercisesInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => WorkoutCreateOrConnectWithoutExercisesInputObjectSchema),
        z
          .lazy(() => WorkoutCreateOrConnectWithoutExercisesInputObjectSchema)
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

export const WorkoutCreateNestedManyWithoutExercisesInputObjectSchema = Schema;
