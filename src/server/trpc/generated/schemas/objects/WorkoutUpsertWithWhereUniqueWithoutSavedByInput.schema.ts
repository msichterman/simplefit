import { z } from "zod";
import { WorkoutWhereUniqueInputObjectSchema } from "./WorkoutWhereUniqueInput.schema";
import { WorkoutUpdateWithoutSavedByInputObjectSchema } from "./WorkoutUpdateWithoutSavedByInput.schema";
import { WorkoutUncheckedUpdateWithoutSavedByInputObjectSchema } from "./WorkoutUncheckedUpdateWithoutSavedByInput.schema";
import { WorkoutCreateWithoutSavedByInputObjectSchema } from "./WorkoutCreateWithoutSavedByInput.schema";
import { WorkoutUncheckedCreateWithoutSavedByInputObjectSchema } from "./WorkoutUncheckedCreateWithoutSavedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutUpsertWithWhereUniqueWithoutSavedByInput> =
  z
    .object({
      where: z.lazy(() => WorkoutWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => WorkoutUpdateWithoutSavedByInputObjectSchema),
        z.lazy(() => WorkoutUncheckedUpdateWithoutSavedByInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => WorkoutCreateWithoutSavedByInputObjectSchema),
        z.lazy(() => WorkoutUncheckedCreateWithoutSavedByInputObjectSchema),
      ]),
    })
    .strict();

export const WorkoutUpsertWithWhereUniqueWithoutSavedByInputObjectSchema =
  Schema;
