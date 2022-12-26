import { z } from "zod";
import { WorkoutWhereUniqueInputObjectSchema } from "./WorkoutWhereUniqueInput.schema";
import { WorkoutUpdateWithoutTagsInputObjectSchema } from "./WorkoutUpdateWithoutTagsInput.schema";
import { WorkoutUncheckedUpdateWithoutTagsInputObjectSchema } from "./WorkoutUncheckedUpdateWithoutTagsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutUpdateWithWhereUniqueWithoutTagsInput> = z
  .object({
    where: z.lazy(() => WorkoutWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => WorkoutUpdateWithoutTagsInputObjectSchema),
      z.lazy(() => WorkoutUncheckedUpdateWithoutTagsInputObjectSchema),
    ]),
  })
  .strict();

export const WorkoutUpdateWithWhereUniqueWithoutTagsInputObjectSchema = Schema;
