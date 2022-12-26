import { z } from "zod";
import { WorkoutWhereUniqueInputObjectSchema } from "./WorkoutWhereUniqueInput.schema";
import { WorkoutUpdateWithoutAuthorInputObjectSchema } from "./WorkoutUpdateWithoutAuthorInput.schema";
import { WorkoutUncheckedUpdateWithoutAuthorInputObjectSchema } from "./WorkoutUncheckedUpdateWithoutAuthorInput.schema";
import { WorkoutCreateWithoutAuthorInputObjectSchema } from "./WorkoutCreateWithoutAuthorInput.schema";
import { WorkoutUncheckedCreateWithoutAuthorInputObjectSchema } from "./WorkoutUncheckedCreateWithoutAuthorInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutUpsertWithWhereUniqueWithoutAuthorInput> =
  z
    .object({
      where: z.lazy(() => WorkoutWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => WorkoutUpdateWithoutAuthorInputObjectSchema),
        z.lazy(() => WorkoutUncheckedUpdateWithoutAuthorInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => WorkoutCreateWithoutAuthorInputObjectSchema),
        z.lazy(() => WorkoutUncheckedCreateWithoutAuthorInputObjectSchema),
      ]),
    })
    .strict();

export const WorkoutUpsertWithWhereUniqueWithoutAuthorInputObjectSchema =
  Schema;
