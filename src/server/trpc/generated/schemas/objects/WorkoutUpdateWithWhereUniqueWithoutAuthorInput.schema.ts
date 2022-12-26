import { z } from "zod";
import { WorkoutWhereUniqueInputObjectSchema } from "./WorkoutWhereUniqueInput.schema";
import { WorkoutUpdateWithoutAuthorInputObjectSchema } from "./WorkoutUpdateWithoutAuthorInput.schema";
import { WorkoutUncheckedUpdateWithoutAuthorInputObjectSchema } from "./WorkoutUncheckedUpdateWithoutAuthorInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutUpdateWithWhereUniqueWithoutAuthorInput> =
  z
    .object({
      where: z.lazy(() => WorkoutWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => WorkoutUpdateWithoutAuthorInputObjectSchema),
        z.lazy(() => WorkoutUncheckedUpdateWithoutAuthorInputObjectSchema),
      ]),
    })
    .strict();

export const WorkoutUpdateWithWhereUniqueWithoutAuthorInputObjectSchema =
  Schema;
