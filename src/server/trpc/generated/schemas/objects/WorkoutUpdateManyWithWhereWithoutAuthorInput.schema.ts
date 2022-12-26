import { z } from "zod";
import { WorkoutScalarWhereInputObjectSchema } from "./WorkoutScalarWhereInput.schema";
import { WorkoutUpdateManyMutationInputObjectSchema } from "./WorkoutUpdateManyMutationInput.schema";
import { WorkoutUncheckedUpdateManyWithoutAuthoredWorkoutsInputObjectSchema } from "./WorkoutUncheckedUpdateManyWithoutAuthoredWorkoutsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutUpdateManyWithWhereWithoutAuthorInput> = z
  .object({
    where: z.lazy(() => WorkoutScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => WorkoutUpdateManyMutationInputObjectSchema),
      z.lazy(
        () => WorkoutUncheckedUpdateManyWithoutAuthoredWorkoutsInputObjectSchema
      ),
    ]),
  })
  .strict();

export const WorkoutUpdateManyWithWhereWithoutAuthorInputObjectSchema = Schema;
