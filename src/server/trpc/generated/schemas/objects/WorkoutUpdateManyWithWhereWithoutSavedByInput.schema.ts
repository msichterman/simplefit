import { z } from "zod";
import { WorkoutScalarWhereInputObjectSchema } from "./WorkoutScalarWhereInput.schema";
import { WorkoutUpdateManyMutationInputObjectSchema } from "./WorkoutUpdateManyMutationInput.schema";
import { WorkoutUncheckedUpdateManyWithoutSavedWorkoutsInputObjectSchema } from "./WorkoutUncheckedUpdateManyWithoutSavedWorkoutsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutUpdateManyWithWhereWithoutSavedByInput> =
  z
    .object({
      where: z.lazy(() => WorkoutScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => WorkoutUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => WorkoutUncheckedUpdateManyWithoutSavedWorkoutsInputObjectSchema
        ),
      ]),
    })
    .strict();

export const WorkoutUpdateManyWithWhereWithoutSavedByInputObjectSchema = Schema;
