import { z } from "zod";
import { WorkoutWhereUniqueInputObjectSchema } from "./WorkoutWhereUniqueInput.schema";
import { WorkoutCreateWithoutAuthorInputObjectSchema } from "./WorkoutCreateWithoutAuthorInput.schema";
import { WorkoutUncheckedCreateWithoutAuthorInputObjectSchema } from "./WorkoutUncheckedCreateWithoutAuthorInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutCreateOrConnectWithoutAuthorInput> = z
  .object({
    where: z.lazy(() => WorkoutWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => WorkoutCreateWithoutAuthorInputObjectSchema),
      z.lazy(() => WorkoutUncheckedCreateWithoutAuthorInputObjectSchema),
    ]),
  })
  .strict();

export const WorkoutCreateOrConnectWithoutAuthorInputObjectSchema = Schema;
