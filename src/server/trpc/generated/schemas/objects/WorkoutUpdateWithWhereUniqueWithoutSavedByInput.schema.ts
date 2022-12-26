import { z } from "zod";
import { WorkoutWhereUniqueInputObjectSchema } from "./WorkoutWhereUniqueInput.schema";
import { WorkoutUpdateWithoutSavedByInputObjectSchema } from "./WorkoutUpdateWithoutSavedByInput.schema";
import { WorkoutUncheckedUpdateWithoutSavedByInputObjectSchema } from "./WorkoutUncheckedUpdateWithoutSavedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutUpdateWithWhereUniqueWithoutSavedByInput> =
  z
    .object({
      where: z.lazy(() => WorkoutWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => WorkoutUpdateWithoutSavedByInputObjectSchema),
        z.lazy(() => WorkoutUncheckedUpdateWithoutSavedByInputObjectSchema),
      ]),
    })
    .strict();

export const WorkoutUpdateWithWhereUniqueWithoutSavedByInputObjectSchema =
  Schema;
