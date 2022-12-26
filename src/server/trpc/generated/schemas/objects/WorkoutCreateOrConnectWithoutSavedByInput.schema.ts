import { z } from "zod";
import { WorkoutWhereUniqueInputObjectSchema } from "./WorkoutWhereUniqueInput.schema";
import { WorkoutCreateWithoutSavedByInputObjectSchema } from "./WorkoutCreateWithoutSavedByInput.schema";
import { WorkoutUncheckedCreateWithoutSavedByInputObjectSchema } from "./WorkoutUncheckedCreateWithoutSavedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutCreateOrConnectWithoutSavedByInput> = z
  .object({
    where: z.lazy(() => WorkoutWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => WorkoutCreateWithoutSavedByInputObjectSchema),
      z.lazy(() => WorkoutUncheckedCreateWithoutSavedByInputObjectSchema),
    ]),
  })
  .strict();

export const WorkoutCreateOrConnectWithoutSavedByInputObjectSchema = Schema;
