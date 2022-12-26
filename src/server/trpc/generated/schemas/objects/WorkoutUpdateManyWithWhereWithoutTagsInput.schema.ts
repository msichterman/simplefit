import { z } from "zod";
import { WorkoutScalarWhereInputObjectSchema } from "./WorkoutScalarWhereInput.schema";
import { WorkoutUpdateManyMutationInputObjectSchema } from "./WorkoutUpdateManyMutationInput.schema";
import { WorkoutUncheckedUpdateManyWithoutWorkoutsInputObjectSchema } from "./WorkoutUncheckedUpdateManyWithoutWorkoutsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutUpdateManyWithWhereWithoutTagsInput> = z
  .object({
    where: z.lazy(() => WorkoutScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => WorkoutUpdateManyMutationInputObjectSchema),
      z.lazy(() => WorkoutUncheckedUpdateManyWithoutWorkoutsInputObjectSchema),
    ]),
  })
  .strict();

export const WorkoutUpdateManyWithWhereWithoutTagsInputObjectSchema = Schema;
